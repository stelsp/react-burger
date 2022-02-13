import ModalOverlay from "../Modal/ModalOverlay/ModalOverlay";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <>
      <ModalOverlay />
      <div className={styles.container}>
        <span className={styles.loader} />
      </div>
    </>
  );
}

export default Loader;
