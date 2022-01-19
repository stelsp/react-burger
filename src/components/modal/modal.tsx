import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import styles from "./modal.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal({ open, close, children }: any) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
      <ModalOverlay close={close} />
      <div className={styles.modal}>
        <span className={styles.close}>
          <CloseIcon type="primary" onClick={close} />
        </span>
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default Modal;
