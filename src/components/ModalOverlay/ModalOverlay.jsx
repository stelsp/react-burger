import PropTypes from "prop-types";
import styles from "./ModalOverlay.module.css";

function ModalOverlay({ onClose }) {
  return <div className={styles.overlay} onClick={onClose} />;
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
};

export default ModalOverlay;
