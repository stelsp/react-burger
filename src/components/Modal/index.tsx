import styles from "./styles.module.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import ModalOverlay from "../ModalOverlay";
import IModalProps from "./types";

const MODAL_ROOT = document.getElementById("modal-root") as Element;

const Modal: React.FC<IModalProps> = ({ onClose, children, title }) => {
  useEffect(() => {
    function closeOnEsc(e: any) {
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
};

export default Modal;
