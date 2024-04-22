import PropTypes from "prop-types";

const Select = (props) => {
  const { options, name } = props;

  return (
    <select className="select-css">
      <option key={name} value={name}>
        {name}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.title}>
        {option.title}
      </option>
      ))}
    </select>
  );
};
Select.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
