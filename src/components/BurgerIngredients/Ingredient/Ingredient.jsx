import styles from "./Ingredient.module.css";
import { ingredientPropTypes } from "../../../constants/custom-prop-types";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Modal from "../../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { MODAL_TITLE_INGREDIENT } from "../../../constants/content";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIngredient } from "../../../services/actions/actions";
import { useDrag } from "react-dnd";

function Ingredient({ el }) {
  const dispatch = useDispatch();
  const { currentIngredient, outer, inner } = useSelector((store) => ({
    currentIngredient: store.currentIngredient,
    outer: store.burgerConstructor.outer,
    inner: store.burgerConstructor.inner,
  }));

  const count = useMemo(() => {
    return el.type === "bun" && el._id === outer._id
      ? 2
      : inner.filter((item) => item._id === el._id).length;
  }, [inner, outer, el]);

  const openModal = useCallback(() => {
    dispatch(setCurrentIngredient(el));
  }, [dispatch, el]);

  const closeModal = useCallback(() => {
    dispatch(setCurrentIngredient(null));
  }, [dispatch]);

  const [, drag] = useDrag(() => ({
    type: "ingredient",
    item: el,
  }));

  return (
    <>
      <div onClick={openModal} className={styles.card} ref={drag}>
        {count > 0 && <Counter count={count} size={"default"} />}
        <img src={el.image} alt={el.name} className={styles.img} />
        <p className={styles.price}>
          <span className={styles.span}>{el.price}</span>
          <CurrencyIcon type="primary" />
        </p>
        <h3 className={styles.card__title}>{el.name}</h3>
      </div>
      {currentIngredient && (
        <Modal onClose={closeModal} title={MODAL_TITLE_INGREDIENT}>
          <IngredientDetails el={currentIngredient} />
        </Modal>
      )}
    </>
  );
}

Ingredient.propTypes = {
  el: ingredientPropTypes.isRequired,
};

export default Ingredient;
