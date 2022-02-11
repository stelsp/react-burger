import styles from "./IngredientType.module.css";
import Ingredient from "../Ingredient/Ingredient";

function IngredientType({ type, title }) {
  return (
    <>
      <h3 className={styles.cards__title}>{title}</h3>
      <ul className={styles.cards}>
        {type.map((el) => {
          return <Ingredient el={el} key={el._id} />;
        })}
      </ul>
    </>
  );
}

export default IngredientType;
