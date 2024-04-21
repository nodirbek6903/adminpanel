import TableCars from "../../components/Cars/table-cars";
import "./cars.css";

const Cars = () => {
  return (
    <div>
      <button className="cars-btn">Create new cars</button>
      <main>
       <TableCars />
      </main>
    </div>
  );
};

export default Cars;
