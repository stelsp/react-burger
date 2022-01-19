import PropTypes from "prop-types";

import styles from "./ingredient-details.module.css";

function IngredientsDetails({ currentIngredient, data }: any) {
  const ingridient = data.filter((el: any) => el._id === currentIngredient);

  return (
    <>
      {ingridient.map((el: any) => {
        return (
          <div className={styles.card + " pb-15 pr-10 pl-10"} key={el._id}>
            <h3 className={styles.title + " text text_type_main-large"}>
              Детали ингредиента
            </h3>
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      calories: PropTypes.number,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
    })
  ).isRequired,
};

export default IngredientsDetails;
