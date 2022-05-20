import styles from "./styles.module.css";
import IModalOverlayProps from "./types";

const ModalOverlay: React.FC<IModalOverlayProps> = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose} />;
};

export default ModalOverlay;
