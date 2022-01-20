import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";
import ingredientPropTypes from "../../constants/ingredient-prop-types";

function IngredientsDetails({ currentIngredient, data }) {
  const ingredient = data.filter((el) => el._id === currentIngredient);

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
              <li
                className={
                  styles.text +
                  " text text_type_main-default text_color_inactive"
                }
              >
                Калории,ккал <span>{el.calories}</span>
              </li>
              <li
                className={
                  styles.text +
                  " text text_type_main-default text_color_inactive"
                }
              >
                Белки, г <span>{el.proteins}</span>
              </li>
              <li
                className={
                  styles.text +
                  " text text_type_main-default text_color_inactive"
                }
              >
                Жиры, г <span>{el.fat}</span>
              </li>
              <li
                className={
                  styles.text +
                  " text text_type_main-default text_color_inactive"
                }
              >
                Углеводы, г <span>{el.carbohydrates}</span>
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
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default IngredientsDetails;
