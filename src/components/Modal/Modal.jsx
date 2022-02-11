import { useEffect } from "react";

import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import ModalOverlay from "./ModalOverlay/ModalOverlay";

const MODAL_ROOT = document.getElementById("modal-root");

function Modal({ onClose, children, title }) {
  useEffect(() => {
    function closeOnEsc(e) {
      if (e.key === "Escape" || e.key === "Esc") {
        onClose();
      }
    }
    document.addEventListener("keyup", closeOnEsc);

    return () => {
      document.removeEventListener("keyup", closeOnEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
        <span className={styles.close}>
          <CloseIcon type="primary" onClick={onClose} />
        </span>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>,
    MODAL_ROOT
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default Modal;
