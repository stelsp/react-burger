import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import styles from "./ImageView.module.css";

function ImageView() {
  return (
    <>
      <h1 className={styles.title}>Детали ингредиента</h1>
      <main className={styles.section}>
        <IngredientDetails />
      </main>
    </>
  );
}

export default ImageView;
