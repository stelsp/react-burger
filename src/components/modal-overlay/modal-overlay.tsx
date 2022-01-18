import React, { CSSProperties } from "react";
import PropTypes from "prop-types";

import styles from "./modal-overlay.module.css";

function ModalOverlay({ onClose }: any) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
    </>
  );
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
