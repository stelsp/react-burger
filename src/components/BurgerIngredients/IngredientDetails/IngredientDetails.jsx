import styles from "./IngredientDetails.module.css";
import { ingredientPropTypes } from "../../../constants/custom-prop-types";
import { INGREDIENT_COMPOUND } from "../../../constants/content";

function IngredientDetails({ el }) {
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

IngredientDetails.propTypes = {
  el: ingredientPropTypes.isRequired,
};

export default IngredientDetails;
