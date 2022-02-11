import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";

function IngredientDetails({ el }) {
  return (
    <div className={styles.card} key={el._id}>
      <img src={el.image} alt={el.name} className={styles.img} />
      <p className={styles.test}>{el.name}</p>
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
}

IngredientDetails.propTypes = {
  el: PropTypes.object.isRequired,
};

export default IngredientDetails;
