/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./Locations.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";

const Locations = () => {
  const [formData, setFormData] = useState({
    EN: "",
    RU: "",
    TextEN: "",
    TextRU: "",
    editedNameEN: "",
    editedNameRU: "",
    editedTextEN: "",
    editedTextRU: "",
    prevImage: "",
  });

  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [editedImages, setEditedImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const imgUrl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/locations",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setData(data?.data);
        setLoading(false);
      } else {
        console.log("Ma'lumotlarni olib bo'lmadi");
      }
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  const handleGetEditLocations = async (id) => {
    handleOpenModal();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://autoapi.dezinfeksiyatashkent.uz/api/locations/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setFormData({
          ...formData,
          editedNameEN: data?.data?.name_en,
          editedNameRU: data?.data?.name_ru,
          editedTextEN: data?.data?.text_en,
          editedTextRU: data?.data?.text_ru,
          prevImage: imgUrl + data?.data?.image_src,
        });
        localStorage.setItem("selectedId", id);
      } else {
        console.log("Ma'lumotlarni olib bo'lmadi");
      }
    } catch (error) {
      console.error("error editing locations", error);
    }
  };

  const handleSubmitLocations = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name_en", formData.EN);
      formData.append("name_ru", formData.RU);
      formData.append("text_en", formData.TextEN);
      formData.append("text_ru", formData.TextRU);
      images.forEach((image) => {
        formData.append("images", image);
      });
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://autoapi.dezinfeksiyatashkent.uz/api/locations",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        toast.success("Locations muvaffaqiyatli qo'shildi", {
          autoClose: 2000,
        });
        fetchData();
        setFormData({
          ...formData,
          EN: "",
          RU: "",
          TextEN: "",
          TextRU: "",
        });
        setImages([]);
      } else {
        toast.error("Locations qo'shib bo'lmadi", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("error creating locations", error);
    }
  };

  const handleUploadLocations = async (e) => {
    e.preventDefault();
    try {
      const id = localStorage.getItem("selectedId");
      const formData = new FormData();
      formData.append("name_en", formData.editedNameEN);
      formData.append("name_ru", formData.editedNameRU);
      formData.append("text_en", formData.editedTextEN);
      formData.append("text_ru", formData.editedTextRU);
      if (editedImages.length > 0) {
        editedImages.forEach((image) => {
          formData.append("images", image);
        });
      } else {
        formData.append("image_src", formData.prevImage.replace(imgUrl, ""));
      }
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://autoapi.dezinfeksiyatashkent.uz/api/locations/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        toast.success("Malumot muvaffaqqiyatli o'zgartirildi!", {
          autoClose: 2000,
        });
        fetchData();
        handleOpenModal(false);
      } else {
        toast.error("Locationsni yangilab bo‘lmadi", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Locationsni yangilashda xato", error);
    }
  };

  const handleDeleteLocations = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(
        `https://autoapi.dezinfeksiyatashkent.uz/api/locations/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchData();
      toast.success("Malumot muvaffaqqiyatli o'chirildi!", {
        autoClose: 2000,
      });
    } catch (error) {
      console.error("error deleting locations", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <Circles color="#00BFFF" size={100} />
        </div>
      ) : (
        <>
          <div className="locations-container">
            <div className="locations-card">
              <form
                action=""
                className="locations-form"
                onSubmit={handleSubmitLocations}
              >
                <h2>Location qo'shish</h2>
                <div className="form-items">
                  <div className="form-item">
                    <label htmlFor="">Locations name - EN</label>
                    <input
                      type="text"
                      value={formData.EN}
                      onChange={(e) => handleInputChange(e, "EN")}
                      placeholder="Locations name - EN"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="">Location name - RU</label>
                    <input
                      type="text"
                      value={formData.RU}
                      onChange={(e) => handleInputChange(e, "RU")}
                      placeholder="Locations name - RU"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="">Location text - EN</label>
                    <input
                      type="text"
                      value={formData.TextEN}
                      onChange={(e) => handleInputChange(e, "TextEN")}
                      placeholder="Locations text - EN"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="">Location text - RU</label>
                    <input
                      type="text"
                      value={formData.TextRU}
                      onChange={(e) => handleInputChange(e, "TextRU")}
                      placeholder="Location text - RU"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="">Upload Image</label>
                    <input
                      type="file"
                      onChange={(e) => setImages([...e.target.files])}
                      required
                    />
                  </div>
                </div>
                <div className="form-button">
                  <button type="submit">Saqlash</button>
                </div>
              </form>
            </div>
            <div className="locations-table">
              <table className="table-container">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Location name - EN</th>
                    <th>Location name - RU</th>
                    <th>Location text - EN</th>
                    <th>Location text - RU</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name_en}</td>
                        <td>{item.name_ru}</td>
                        <td>{item.text_en}</td>
                        <td>{item.text_ru}</td>
                        <td>
                          <button
                            className="edit-btn"
                            onClick={() => handleGetEditLocations(item.id)}
                          >
                            <FaEdit /> Edit
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteLocations(item.id)}
                          >
                            <FaTrash /> Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="delete" colSpan="4">
                        Data Not Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {openModal && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Edit Location</h2>
                  <button onClick={handleOpenModal}>&times;</button>
                </div>
                <div className="modal-body">
                  <form
                    action=""
                    className="modal-form"
                    onSubmit={handleUploadLocations}
                  >
                    <div className="form-item">
                      <label htmlFor="">Locations name - EN</label>
                      <input
                        type="text"
                        value={formData.editedNameEN}
                        onChange={(e) =>
                          handleInputChange(e, "editedNameEN")
                        }
                        placeholder="Location name - EN"
                        required
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="">Locations name - RU</label>
                      <input
                        type="text"
                        value={formData.editedNameRU}
                        onChange={(e) =>
                          handleInputChange(e, "editedNameRU")
                        }
                        placeholder="Location name - RU"
                        required
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="">Location text - EN</label>
                      <input
                        type="text"
                        value={formData.editedTextEN}
                        onChange={(e) =>
                          handleInputChange(e, "editedTextEN")
                        }
                        placeholder="Location text - EN"
                        required
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="">Location text - RU</label>
                      <input
                        type="text"
                        value={formData.editedTextRU}
                        onChange={(e) =>
                          handleInputChange(e, "editedTextRU")
                        }
                        placeholder="Location text - RU"
                        required
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="">Upload Image</label>
                      <input
                        type="file"
                        onChange={(e) =>
                          setEditedImages([...e.target.files])
                        }
                      />
                    </div>
                    <div className="prev-image">
                      <img
                        className="edit-images"
                        src={formData.prevImage}
                        alt=""
                      />
                    </div>
                    <div className="form-button">
                      <button type="submit">Upload</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Locations;
