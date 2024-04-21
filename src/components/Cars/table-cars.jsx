import { useState } from "react";
import CreateCars from "./create-cars";
import InfoCars from "./info-cars";
import EditCars from "./edit-cars";

const TableCars = () => {

    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderComponent = () => {
    if (selectedOption === "delete") return <CreateCars />;
    else  if (selectedOption === "info") return <InfoCars />
    else  if (selectedOption === "create")  return <CreateCars />
    else if (selectedOption === "edit")  return <EditCars />; 
    return null;
  };
   
  return (
    <>
    
    <table>
      <tr>
        <th>Rang</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Categoriya</th>
        <th>Lokatsiya</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>Blue</td>
        <td>Kiya</td>
        <td>Selton</td>
        <td>Suv</td>
        <td>Dubai Mail</td>
        <td>
          <select value={selectedOption} onChange={handleOptionChange} className="select-css">
            <option value="" selected>Action</option>
            <option value="delete">Delete</option>
            <option value="edit">Edit</option>
            <option value="info">Info</option>
          </select>
        </td>
      </tr>
    </table>
    {
        renderComponent()
    }
    </>
  );
};

export default TableCars;
