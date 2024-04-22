import { useDispatch } from "react-redux";
import "../../Module/Cars/cars.css";
import { actionCars } from "../../store/autozumadminSlice";
import { RiArrowGoBackFill } from "react-icons/ri";
import Select from "./select";
import GetBrands from "../../api/brand/brands";
import GetCategories from "../../api/category/category";
import GetModel from "../../api/model/model";
import GetLocations from "../../api/lcoations/locations";
import GetCities from "../../api/city/city";

const CreateCars = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = GetBrands();
  const { data: categories, isLoading: categoryLoading } = GetCategories();
  const { data: model, isLoading: modelLoading } = GetModel();
  const { data: locations, isLoading: locationsLoading } = GetLocations();
  const { data: cities, isLoading: citiesLoading } = GetCities();

  const updateCategoryKey = categories?.data.map((item) => {
    const { name_ru, ...rest } = item;
    return { title: name_ru, ...rest };
  });

  const updateLocationsKey = locations?.data.map((item) => {
    const { name, ...rest } = item;
    return { title: name, ...rest };
  });

  console.log(updateLocationsKey);
  const updateCitiesKey = cities?.data.map((item) => {
    const { name, ...rest } = item;
    return { title: name, ...rest };
  });

  const updateModelsKey = model?.data.map((item) => {
    const { name, ...rest } = item;
    return { title: name, ...rest };
  });

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
      <section className="create-body-cars">
        {categoryLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select options={updateCategoryKey} name="Categories" />
        )}
        {isLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select options={data?.data} name="Brand" />
        )}
        {modelLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select options={updateModelsKey} name="Model" />
        )}
        {locationsLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select options={updateLocationsKey} name="Locatsiya" />
        )}
        {citiesLoading ? (
          <div className="card is-loading">
            <p></p>
          </div>
        ) : (
          <Select options={updateCitiesKey} name="Locatsiya" />
        )}
      </section>
    </div>
  );
};

export default CreateCars;
