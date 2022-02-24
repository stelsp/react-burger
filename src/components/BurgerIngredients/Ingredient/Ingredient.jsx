import styles from "./Ingredient.module.css";
import { ingredientPropTypes } from "../../../constants/custom-prop-types";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Modal from "../../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { MODAL_TITLE_INGREDIENT } from "../../../constants/content";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentIngr } from "../../../services/actions/actions";

function Ingredient({ el }) {
  const dispatch = useDispatch();
  const ingredient = useSelector(
    (store) => store.ingredientsReducer.currentIngredient
  );
  const openModal = useCallback(() => {
    dispatch(getCurrentIngr(el));
  }, [dispatch, el]);
  const closeModal = useCallback(() => {
    dispatch(getCurrentIngr(null));
  }, [dispatch]);

  return (
    <>
      <div onClick={openModal} className={styles.card}>
        <Counter count={1} size={"default"} />
        <img src={el.image} alt={el.name} className={styles.img} />
        <p className={styles.price}>
          <span className={styles.span}>{el.price}</span>
          <CurrencyIcon type="primary" />
        </p>
        <h3 className={styles.card__title}>{el.name}</h3>
      </div>
      {ingredient && (
        <Modal onClose={closeModal} title={MODAL_TITLE_INGREDIENT}>
          <IngredientDetails el={ingredient} />
        </Modal>
      )}
    </>
  );
}

Ingredient.propTypes = {
  el: ingredientPropTypes.isRequired,
};

export default Ingredient;
