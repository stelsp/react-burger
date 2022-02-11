import styles from "./IngredientCategory.module.css";

import Ingredient from "../Ingredient/Ingredient";

function IngredientCategory({ category, title }) {
  return (
    <>
      <h3 className={styles.cards__title + " mt-10"}>{title}</h3>
      <ul className={styles.cards}>
        {category.map((el) => {
          return <Ingredient el={el} key={el._id} />;
        })}
      </ul>
    </>
  );
}

export default IngredientCategory;
