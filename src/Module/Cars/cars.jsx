import { useDispatch } from "react-redux";
import TableCars from "../../components/Cars/table-cars";
import "./cars.css";
import { actionCars } from "../../store/autozumadminSlice";

const Cars = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button className="cars-btn" onClick={() =>dispatch(actionCars("create"))}>Create new cars</button>
      <main>
       <TableCars />
      </main>
    </div>
  );
};

export default Cars;
