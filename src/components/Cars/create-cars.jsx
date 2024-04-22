import { useDispatch } from "react-redux";
import "../../Module/Cars/cars.css";
import { actionCars } from "../../store/autozumadminSlice";
import { RiArrowGoBackFill } from "react-icons/ri";
import Select from "./select";
import GetBrands from "../../api/brand/brands";

const CreateCars = () => {
  const dispatch = useDispatch();
  const {data,isLoading} = GetBrands()
console.log(data);
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
      <section>

{
  !isLoading &&   <Select options={data?.data} name="Brand" />
}
      </section>
    </div>
  );
};

export default CreateCars;
