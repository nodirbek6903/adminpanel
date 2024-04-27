import {
  Button,
  Input,
  Stack,
  Switch
} from "@chakra-ui/react";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import "../../Module/Cars/cars.css";
import PostCars from "../../api/cars/post-cars.api";
import { actionCars } from "../../store/autozumadminSlice";
import EditSelect from "./editSelect";

const EditCars = (props) => {
  
  const dispatch = useDispatch();
  const { mutate, isLoading: isLoadingCreateCars } = PostCars(props);
  const cars = useSelector((cars) => cars.autozum.cars);
  const carsObj = useSelector((cars) => cars.autozum.carsobj);
  const category_id = useSelector((cars) => cars.autozum.categories);
  const brand_id = useSelector((cars) => cars.autozum.brand);
  const model_id = useSelector((cars) => cars.autozum.model);
  const location_id = useSelector((cars) => cars.autozum.locatsiya);
  const city_id = useSelector((cars) => cars.autozum.city);
  

  const [images, setImages] = useState([]);
  const [imagesCars, setImagesCar] = useState([]);
  const [cover, setCover] = useState(null);
  const [inclusive, setInclusive] = useState(false);

  const handleCklick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brand_id", brand_id);
    formData.append("category_id", category_id);
    formData.append("model_id", model_id);
    formData.append("city_id", city_id);
    formData.append("color", cars.color.name);
    formData.append("year", cars.year.name);
    formData.append("seconds", cars.seconds.name);
    formData.append("max_speed", cars.speed.name);
    formData.append("max_people", cars.people.name);
    formData.append("transmission", cars.transmission.name);
    formData.append("motor", cars.motor.name);
    formData.append("drive_side", cars.drive_side.name);
    formData.append("petrol", cars.oyls.name);
    formData.append("limitperday", cars.limitperday.name);
    formData.append("deposit", cars.deposit.name);
    formData.append("premium_protection", cars.premium_pro_price.name);
    formData.append("price_in_aed", cars.price_aed.name);
    formData.append("price_in_usd", cars.price_usd.name);
    formData.append("price_in_aed_sale", cars.price_aed_otd.name);
    formData.append("price_in_usd_sale", cars.price_usd_otd.name);
    formData.append("location_id", location_id);
    formData.append("inclusive", inclusive);
    if (!images) return;
    Object.entries(images).forEach((el) => formData.append("images", el[1]));
    Object.entries(imagesCars).forEach((el) =>
      formData.append("images", el[1])
    );
    formData.append("cover", cover);
    mutate(formData);
  };
  return (
    <div className="create-cars-contetnt">
      <main className="create-cars-header">
        <h1>Car almashtrish</h1>
        <Button
          colorScheme="teal"
          variant="outline"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => dispatch(actionCars(""))}
        >
          <RiArrowGoBackFill /> Orqaga qaytish
        </Button>
      </main>
      <form onSubmit={(e) => handleCklick(e)} style={{ marginBottom: "15px" }}>
        <div className="create-body-cars">
          <div style={{gridColumn: "span 3 / span 3"}}>
        <EditSelect />  
          </div>
         
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <label htmlFor="machinas">Mashina rasmlarini yuklang</label>
            <Input
              style={{ padding: "5px 10px" }}
              required
              multiple
              onChange={(e) => setImagesCar(e.target.files[0])}
              type="file"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <label htmlFor="asosi">Asosi rasmni yuklang</label>
            <Input
              style={{ padding: "5px 10px" }}
              multiple
              onChange={(e) => setImages(e.target.files)}
              type="file"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <label htmlFor="asosi">Asosi rasmni yuklang</label>
            <Input
              style={{ padding: "5px 10px" }}
              onChange={(e) => setCover(e.target.files[0])}
              type="file"
            />
          </div>
          <Stack>
            <span>Inclusive</span>
            <Switch
              value={inclusive}
              onChange={(e) => setInclusive(e.target.checked)}
              size="md"
            />
          </Stack>
        </div>

        <Button
          isLoading={isLoadingCreateCars}
          loadingText="Yaratish"
          type="submit"
          mt={5}
          colorScheme="teal"
          variant="outline"
        >
          <IoIosAdd size={32} />{" "}
          <span style={{ fontSize: "20px" }}>Yaratish</span>
        </Button>
      </form>
    </div>
  );
};

export default EditCars;
