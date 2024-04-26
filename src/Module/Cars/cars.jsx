import { useDispatch } from "react-redux";
import TableCars from "../../components/Cars/table-cars";
import { actionCars } from "../../store/autozumadminSlice";
import "./cars.css";

const Cars = () => {
  const dispatch = useDispatch();

  return (
    <div className="table-cars">
      <button
        className="cars-btn"
        onClick={() => dispatch(actionCars("create"))}
      >
        Create new cars
      </button>

      <TableCars />
    </div>
  );
};

export default Cars;
