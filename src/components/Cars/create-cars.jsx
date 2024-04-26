import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import "../../Module/Cars/cars.css";
import GetBrands from "../../api/brand/brands";
import GetCategories from "../../api/category/category";
import GetCities from "../../api/city/city";
import GetLocations from "../../api/lcoations/locations";
import GetModel from "../../api/model/model";
import { actionCars, handlehangeCars } from "../../store/autozumadminSlice";
import Select from "./select";

const CreateCars = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = GetBrands();
  const { data: categories, isLoading: categoryLoading } = GetCategories();
  const { data: model, isLoading: modelLoading } = GetModel();
  const { data: locations, isLoading: locationsLoading } = GetLocations();
  const { data: cities, isLoading: citiesLoading } = GetCities();

  const cars = useSelector((cars) => cars.autozum.cars);
  const category_id = useSelector((cars) => cars.autozum.categories);
  const brand_id = useSelector((cars) => cars.autozum.brand);
  const model_id = useSelector((cars) => cars.autozum.model);
  const location_id = useSelector((cars) => cars.autozum.locatsiya);
  const city_id = useSelector((cars) => cars.autozum.city);

  const [images, setImages] = useState(null);
  const [imagesCars, setImagesCar] = useState(null);
  const [inclusive, setInclusive] = useState(false)
  console.log(images);

  const updateCategoryKey = categories?.data.map((item) => {
    const { name_ru, ...rest } = item;
    return { title: name_ru, ...rest };
  });

  const updateLocationsKey = locations?.data.map((item) => {
    const { name, ...rest } = item;
    return { title: name, ...rest };
  });
  const updateCitiesKey = cities?.data.map((item) => {
    const { name, ...rest } = item;
    return { title: name, ...rest };
  });

  const updateModelsKey = model?.data.map((item) => {
    const { name, ...rest } = item;
    return { title: name, ...rest };
  });

  const handleCklick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brand_id",brand_id);
    formData.append("category_id",category_id);
    formData.append("model_id",model_id);
    formData.append("city_id",city_id);
    formData.append("color",cars.color.name);
    formData.append("year",cars.year.name);
    formData.append("seconds",Number(cars.seconds.name));
    formData.append("max_speed",Number(cars.speed.name));
    formData.append("max_people",Number(cars.people.name));
    formData.append("transmission",cars.transmission.name);
    formData.append("motor",cars.motor.name);
    formData.append("drive_side",cars.drive_side.name);
    formData.append("petrol",cars.oyls.name);
    formData.append("limitperday",cars.limitperday.name);
    formData.append("deposit",cars.deposit.name);
    formData.append("premium_protection",cars.premium_pro_price.name);
    formData.append("price_in_aed",cars.price_aed.name);
    formData.append("price_in_usd",cars.price_usd.name);
    formData.append("price_in_aed_sale",cars.price_aed_otd.name);
    formData.append("price_in_usd_sale",cars.price_usd_otd.name);
    formData.append("location_id",location_id);
    formData.append("inclusive",inclusive);
    formData.append("images",images);
    formData.append("images",imagesCars);
    console.log(formData);
  };

  return (
    <div className="create-cars-contetnt">
      <main className="create-cars-header">
        {" "}
        <h1>Car qo`shish</h1>
        <button
          className="cars-btn"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => dispatch(actionCars(""))}
        >
          <RiArrowGoBackFill /> Orqaga qaytish
        </button>
      </main>
      <form className="create-body-cars">
        {categoryLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select
            options={updateCategoryKey}
            name="Categories"
            actionType="setCategory"
          />
        )}
        {isLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select options={data?.data} name="Brand" actionType="setBrand" />
        )}
        {modelLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select
            options={updateModelsKey}
            name="Model"
            actionType="setModel"
          />
        )}
        {locationsLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select
            options={updateLocationsKey}
            name="Locatsiya"
            actionType="setLocatsia"
          />
        )}
        {citiesLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select
            options={updateCitiesKey}
            name="Cities"
            actionType="setCity"
          />
        )}
        {Object.entries(cars).map((car, id) => {
          return (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <label htmlFor={Object.keys(car)[0]}>
                {Object.values(car)[1].value}
              </label>
              <input
                type="text"
                style={{ backgroundColor: "#f8f8f8" }}
                required
                id={Object.keys(car)[0]}
                className="add-cars-input"
                value={Object.values(car)[1].name}
                onChange={(e) => {
                  dispatch(
                    handlehangeCars({
                      name: Object.values(car)[0],
                      value: e.target.value,
                    })
                  );
                }}
              />
            </div>
          );
        })}
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <label htmlFor="chek">Inclusive</label>
          <div
            style={{
              backgroundColor: "#f8f8f8",
              padding: "10px 8px",
              borderRadius: "7px",
              border: "1px solid black",
            }}
          >
            <input type="checkbox" value={inclusive} onChange={(e) =>setInclusive(e.target.checked)}/>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <label htmlFor="machinas">Mashina rasmlarini yuklang</label>
          <input
            style={{
              backgroundColor: "#f8f8f8",
              padding: "10px 8px",
              borderRadius: "7px",
              border: "1px solid black",
            }}
            multiple
            onChange={(e) => setImagesCar(e.target.files[0])}
            type="file"
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <label htmlFor="asosi">Asosi rasmni yuklang</label>
          <input
            style={{
              backgroundColor: "#f8f8f8",
              padding: "10px 8px",
              borderRadius: "7px",
              border: "1px solid black",
            }}
            multiple
            onChange={(e) => setImages(e.target.files[0])}
            type="file"
          />
        </div>

        <button
          onClick={handleCklick}
          className="cars-btn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosAdd size={32} />{" "}
          <span style={{ fontSize: "20px" }}>Yaratish</span>
        </button>
      </form>
    </div>
  );
};

export default CreateCars;
