import styles from "./IngredientDetails.module.css";
import { INGREDIENT_COMPOUND } from "../../../constants/content";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function IngredientDetails() {
  let { id } = useParams();

  const { ingredients } = useSelector((store) => store.ingredients);

  const el = ingredients.find((el) => el._id === id);

  if (!el) return null;

  return (
    <div className={styles.card} key={el._id}>
      <img src={el.image} alt={el.name} className={styles.img} />
      <p className={styles.test}>{el.name}</p>
      <ul className={styles.container}>
        <li className={styles.text}>
          {INGREDIENT_COMPOUND.CALORIES}
          <span>{el.calories}</span>
        </li>
        <li className={styles.text}>
          {INGREDIENT_COMPOUND.PROTEINS}
          <span>{el.proteins}</span>
        </li>
        <li className={styles.text}>
          {INGREDIENT_COMPOUND.FAT}
          <span>{el.fat}</span>
        </li>
        <li className={styles.text}>
          {INGREDIENT_COMPOUND.CARBOHYDRATES}
          <span>{el.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
