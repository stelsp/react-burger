import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";
import ingredientPropTypes from "../../constants/ingredient-prop-types";
import { useData } from "../App/App";

function IngredientsDetails({ currentIngredient }) {
  const data = useData();
  const ingredient = data.filter((el) => el._id === currentIngredient);

  return (
    <>
      {ingredient.map((el) => {
        return (
          <div className={styles.card} key={el._id}>
            <img src={el.image} alt={el.name} className={styles.img} />
            <p className={styles.title}>{el.name}</p>
            <ul className={styles.container}>
              <li className={styles.text}>
                Калории,ккал<span>{el.calories}</span>
              </li>
              <li className={styles.text}>
                Белки, г<span>{el.proteins}</span>
              </li>
              <li className={styles.text}>
                Жиры, г<span>{el.fat}</span>
              </li>
              <li className={styles.text}>
                Углеводы, г<span>{el.carbohydrates}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

IngredientsDetails.propTypes = {
  currentIngredient: PropTypes.string.isRequired,
  // data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default IngredientsDetails;
