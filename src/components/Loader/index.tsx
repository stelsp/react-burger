import ModalOverlay from "../ModalOverlay";
import styles from "./styles.module.css";

const Loader: React.FC = () => {
  return (
    <>
      <ModalOverlay />
      <div className={styles.container}>
        <span className={styles.loader} />
      </div>
    </>
  );
};

export default Loader;
