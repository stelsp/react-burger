import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import styles from "./modal.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal({ open, children, onClose }: any) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal + " pt-30 pb-30 pr-25 pl-25"}>
        <span className={styles.close}>
          <CloseIcon type="primary" onClick={onClose} />
        </span>
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
