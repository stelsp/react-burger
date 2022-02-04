import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";
import ingredientPropTypes from "../../constants/ingredient-prop-types";
import { useData } from "../App/DataContext";

function IngredientsDetails({ currentIngredient }) {
  const data = useData();
  const ingredient = data.filter((el) => el._id === currentIngredient);

  const TEXT_STYLE = " text text_type_main-default text_color_inactive";

  return (
    <>
      {ingredient.map((el) => {
        return (
          <div className={styles.card + " pb-15 pr-10 pl-10"} key={el._id}>
            <img
              src={el.image}
              alt={el.name}
              className={styles.img + " mb-4"}
            />
            <p className="text text_type_main-medium mb-8">{el.name}</p>
            <ul className={styles.container}>
              <li className={styles.text + TEXT_STYLE}>
                Калории,ккал<span>{el.calories}</span>
              </li>
              <li className={styles.text + TEXT_STYLE}>
                Белки, г<span>{el.proteins}</span>
              </li>
              <li className={styles.text + TEXT_STYLE}>
                Жиры, г<span>{el.fat}</span>
              </li>
              <li className={styles.text + TEXT_STYLE}>
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
