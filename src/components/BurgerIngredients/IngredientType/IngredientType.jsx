import styles from "./IngredientType.module.css";
import PropTypes from "prop-types";
import Ingredient from "../Ingredient/Ingredient";
import { ingredientPropTypes } from "../../../constants/custom-prop-types";
import { nanoid } from "@reduxjs/toolkit";

function IngredientType({ category, title }) {
  return (
    <>
      <h3 className={styles.cards__title}>{title}</h3>
      <ul className={styles.cards}>
        {category.map((el) => {
          return <Ingredient el={el} key={nanoid()} />;
        })}
      </ul>
    </>
  );
}

IngredientType.propTypes = {
  category: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  title: PropTypes.string.isRequired,
};

export default IngredientType;
