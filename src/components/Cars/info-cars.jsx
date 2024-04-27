import { useState } from "react";
import "../../Module/Cars/cars.css";
import { useDispatch } from "react-redux";
import { actionCars } from "../../store/autozumadminSlice";

const InfoCars = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <span className="close" onClick={() => {closeModal(),dispatch(actionCars(""))}}>
              &times;
            </span>
            <p>This is some centered content inside the modal.</p>
            <p>You can add any content here.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoCars;
