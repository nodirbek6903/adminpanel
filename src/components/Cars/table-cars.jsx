import {
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { actionCars } from "../../store/autozumadminSlice";
import CreateCars from "./create-cars";
import { DeleteComponent } from "./delete-cars";
import EditCars from "./edit-cars";
import InfoCars from "./info-cars";
import GetCars from "../../api/cars/get-cars.api";
import GetBrands from "../../api/brand/brands";
import GetModel from "../../api/model/model";
import GetCategories from "../../api/category/category";
import GetLocations from "../../api/lcoations/locations";
import { useState } from "react";

const TableCars = () => {
  const [id, setId] = useState();

  const { data: cars, isLoading, refetch } = GetCars();
  const { data: brand } = GetBrands();
  const { data: categories } = GetCategories();
  const { data: model } = GetModel();
  const { data: location } = GetLocations();

  const dispatch = useDispatch();
  const selectedOption = useSelector((cars) => cars.autozum.actioncars);

  const renderComponent = () => {
    if (selectedOption === "delete")
      return <DeleteComponent id={id} refetch={refetch} />;
    else if (selectedOption === "info") return <InfoCars />;
    else if (selectedOption === "create")
      return <CreateCars refetch={refetch} />;
    else if (selectedOption === "edit") return <EditCars />;
    return null;
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Rang</Th>
              <Th>Brand</Th>
              <Th>Model</Th>
              <Th>Categoriya</Th>
              <Th>Lokatsiya</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              <span className="lds-ripple">
                <span></span>
                <span></span>
              </span>
            ) : (
              cars?.data?.map((car, ind) => {
                return (
                  <Tr key={ind}>
                    <Td>{ind + 1}</Td>
                    <Td>{car.color}</Td>
                    <Td>
                      {
                        brand?.data?.filter((el) => el.id === car.brand_id)[0]
                          .title
                      }
                    </Td>
                    <Td>
                      {
                        model?.data?.filter((el) => el.id === car.model_id)[0]
                          .name
                      }
                    </Td>
                    <Td>
                      {" "}
                      {
                        categories?.data?.filter(
                          (el) => el.id === car.category_id
                        )[0].name_ru
                      }
                    </Td>
                    <Td>
                      {" "}
                      {
                        location?.data?.filter(
                          (el) => el.id === car.location_id
                        )[0].name
                      }
                    </Td>
                    <Td>
                      <Select
                        placeholder="Action"
                        value={selectedOption}
                        onChange={(e) => {
                          dispatch(actionCars(e.target.value), setId(car.id));
                        }}
                      >
                        <option value="delete"> Delete</option>
                        <option value="edit">Edit</option>
                        <option value="info">Info</option>
                      </Select>
                    </Td>
                  </Tr>
                );
              })
            )}
          </Tbody>
        </Table>
      </TableContainer>
      {renderComponent()}
    </>
  );
};

export default TableCars;
