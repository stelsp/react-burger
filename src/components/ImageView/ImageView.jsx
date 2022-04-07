import { useSelector } from "react-redux";
import IngredientDetails from "../BurgerIngredients/IngredientDetails/IngredientDetails";
import { useHistory } from "react-router-dom";
import styles from "./ImageView.module.css";

function ImageView() {
  const history = useHistory();

  const { ingredients } = useSelector((store) => store.ingredients);

  const el = ingredients.find(
    (el) => `/ingredients/:${el._id}` === history.location.pathname
  );

  if (!el) return <div>Image not found</div>;

  return (
    <>
      <h1 className={styles.title}>Детали ингредиента</h1>
      <main className={styles.section}>
        <IngredientDetails el={el} />
      </main>
    </>
  );
}

export default ImageView;
