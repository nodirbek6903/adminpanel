import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import "./Models.css";

const Models = () => {
  const [brandData, setBrandData] = useState([]),
    [modelData, setModelData] = useState([]),
    [brandId, setBrandId] = useState(''),
    [editBrandId, setEditBrandId] = useState(''),
    [loading, setLoading] = useState(true),
    [modelName, setModelName] = useState(''),
    [openEditModal, setOpenEditModal] = useState(false),
    [brandValue, setBrandValue] = useState('Brendni tanlang'),
    [editBrandValue, setEditBrandValue] = useState(''),
    [editModelName, setEditModelName] = useState('');

  // get brands
  const getBrands = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/brands", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const jsonData = await response.json();
        setLoading(false);
        setBrandData(jsonData?.data);
      } else {
        console.log("Ma'lumotlarni olib bo'lmadi");
      }
    } catch (error) {
      console.log("error fetching data", error);
    }
  }

  // get models
  const getModels = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/models", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const jsonData = await response.json();
        setLoading(false);
        setModelData(jsonData?.data);
      } else {
        console.log("Ma'lumotlarni olib bo'lmadi");
      }
    } catch (error) {
      console.log("error fetching data", error);
    }
  }

  useEffect(() => {
    getBrands();
    getModels();
  }, [brandValue])

  // create model by form
  const createModel = async (e) => {
    e.preventDefault();
    try {
      const createFormData = await new FormData();
      createFormData.append("brand_id", brandId);
      createFormData.append("name", modelName);
      const token = localStorage.getItem("access_token");
      const response = await fetch("https://autoapi.dezinfeksiyatashkent.uz/api/models/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: createFormData
      })
      if (response.ok) {
        toast.success("Kategoriya muvaffaqiyatli yaratildi", {
          autoClose: 2000,
        });
        setModelName("");
        setBrandValue("Brendni tanlang");
        getModels();
      } else {
        toast.error("Model yaratib bo'lmadi", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("error creating models", error);
    }
  }

  const selectBrandHandler = (e) => {
    setBrandValue(e.target.value);
    brandData.forEach(item => {
      if (item?.title == e.target.value) {
        setBrandId(item.id)
      }
    })
  }
  const modelNameHandler = (e) => {
    setModelName(e.target.value);
  }
  // for edit
  const editModelNameHandler = (e) => {
    setEditModelName(e.target.value);
  }
  const selectEditBrandHandler = (e) => {
    setEditBrandValue(e.target.value);
    brandData.forEach(item => {
      if (item?.title == e.target.value) {
        setEditBrandId(item.id)
      }
    })
  }

  // for get edit
  const modelEditHandler = async (itemId) => {
    setOpenEditModal(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models/${itemId}/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      if (response.ok) {
        const jsonData = await response.json();
        setEditBrandValue(jsonData?.data?.brand_title);
        setEditModelName(jsonData?.data?.name);
        localStorage.setItem("selectedId", itemId);
      } else {
        console.log("Ma'lumotlarni olib bo'lmadi");
      }
    } catch (error) {
      console.log("error fetching data", error);
    }
  }

  // for put 
  const putToApiHandler = async (e) => {
    e.preventDefault();
    const selectedId = localStorage.getItem("selectedId");
    const formPutData = new FormData();
    formPutData.append("name", editModelName);
    formPutData.append("brand_id", editBrandId);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models/${selectedId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formPutData        
      })
      if (response.ok) {
        setOpenEditModal(false);
        setEditBrandValue("");
        setEditModelName("");
        getModels();
        toast.success("Malumot muvaffaqqiyatli o'zgartirildi!", {
          autoClose: 2000,
        });
      } else {
        toast.error("Kategoriyani yangilab bo‘lmadi", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Kategoriyani yangilashda xato", error);
    }
  }

  // for delete
  const modelDeleteHandler = async (itemId) => {
    if (confirm("Haqiqatan o'chirishni xohlaysizmi?")) {
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models/${itemId}/`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          getModels();
          toast.success("Malumot muvaffaqqiyatli o'chirildi!", {
            autoClose: 2000,
          });
        } else {
          console.log("Ma'lumotlarni olib bo'lmadi");
        }
      } catch (error) {
        console.log("error fetching data", error);
      }
    }
  }

  return (
    <>
      { 
        loading ? 
          <div className="loading-container">
            <Circles color="#00BFFF" size={100} />
          </div> 
        : (
          <div className="models__section">
            <ToastContainer />
            <div className="create__models__box">
              <form action="#" onSubmit={createModel} className="create__models__form">
                <h2>Model yaratish</h2>
                <div className="inputs__grid">
                  <label htmlFor="modelName">
                    Model nomi: <br />
                    <input type="text" name="modelName" required id="modelName" onChange={modelNameHandler} value={modelName} placeholder="Model nomi..." />
                  </label>
                  <label htmlFor="model-brand">
                    Brend: <br />
                    <select name="model-brand" id="model-brand" onChange={selectBrandHandler} value={brandValue}>
                      <option>{brandValue}</option>
                      {brandData.map((item, index) => {
                        return  <option key={index}>{item?.title}</option>
                      })}
                    </select>
                  </label>
                  <button type="submit" className="submit__btn">Yaratish</button>
                </div>
              </form>
            </div>

            <div className="models__table__box">
              <table className="models__table">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Model nomi</th>
                    <th>Brand nomi</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {modelData.length > 0 ? (
                    modelData.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.brand_title}</td>
                        <td>
                          <button
                            className="edit__btn"
                            onClick={() => modelEditHandler(item.id)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="delete__btn"
                            onClick={() => modelDeleteHandler(item.id)}
                          >
                            <FaTrash />
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
            {openEditModal && (
              <>
                <div id="edit-model-box" className="create__models__box">
                  <form action="#" onSubmit={putToApiHandler} className="create__models__form">
                    <h2>Model tahrirlash</h2>
                    <div className="inputs__grid">
                      <label htmlFor="editModelName">
                        Model nomi: <br />
                        <input type="text" name="editModelName" required id="editModelName" onChange={editModelNameHandler} value={editModelName} placeholder="Model nomi..." />
                      </label>
                      <label htmlFor="edit-brand">
                        Brend: <br />
                        <select name="edit-brand" id="edit-brand" onChange={selectEditBrandHandler} value={editBrandValue}>
                          <option>{editBrandValue}</option>
                          {brandData.map((item, index) => {
                            return  <option key={index}>{item?.title}</option>
                          })}
                        </select>
                      </label>
                      <button type="submit" className="submit__btn">Tahrirlash</button>
                    </div>
                  </form>
                  <button className="removeEditModelBtn" onClick={() => setOpenEditModal(false)}><BiX /></button>
                </div>
                <div className="bg"></div>
              </>
            )}
          </div>
        )
      }
    </>
  )
}

export default Models;