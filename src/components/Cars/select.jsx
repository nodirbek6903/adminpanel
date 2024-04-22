import PropTypes from "prop-types";
import "../../Module/Cars/cars.css";
const Select = (props) => {
  const { options, name } = props;

  return (
    <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
    <label htmlFor="">{name}</label>
    <select className="create-select">
      <option selected disabled key={name} value={name}>
        Select {name}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
    
    </div>
  );
};
Select.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
