import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@material-ui/icons/Close";
import "./styles.scss";
import {
  hideModal,
  Modal as ModalProps,
} from "../../../redux/appSettings/appSettingsSlice";
import { useDispatch } from "react-redux";
const Modal = ({ isVisible, onClose, onOpen, children }: ModalProps) => {
  const dispatch = useDispatch();

  return isVisible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal__top">
            <CloseIcon
              fontSize="large"
              onClick={() => {
                dispatch(hideModal());
              }}
            />
          </div>
          {children}{" "}
        </div>,
        document.getElementById("portal")!
      )
    : null;
};
export default Modal;
