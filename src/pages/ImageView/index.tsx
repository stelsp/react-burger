import IngredientDetails from "../../components/IngredientDetails";
import styles from "./styles.module.css";

const ImageView: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>Детали ингредиента</h1>
      <main className={styles.section}>
        <IngredientDetails />
      </main>
    </>
  );
};

export default ImageView;
