import { useDispatch } from "react-redux";
import TableCars from "../../components/Cars/table-cars";
import { actionCars } from "../../store/autozumadminSlice";
import "./cars.css";
import { Button } from "@chakra-ui/react";

const Cars = () => {
  const dispatch = useDispatch();

  return (
    <div style={{position:"relative",padding:"0 10px"}}>
      <Button
      mb={5}
             colorScheme="teal" variant="outline"
        onClick={() => dispatch(actionCars("create"))}
      >
        Create new cars
      </Button>
      <TableCars />
    </div>
  );
};

export default Cars;
