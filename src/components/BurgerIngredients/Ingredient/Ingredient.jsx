import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Ingredient.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Modal from "../../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { MODAL_TITLE_INGREDIENT } from "../../../constants/content";

function Ingredient({ el }) {
  const [show, setShow] = useState(false);
  const openModal = useCallback(() => setShow(true), [show]);
  const closeModal = useCallback(() => setShow(false), [show]);

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
      {show && (
        <Modal onClose={closeModal} title={MODAL_TITLE_INGREDIENT}>
          <IngredientDetails el={el}></IngredientDetails>
        </Modal>
      )}
    </>
  );
}

Ingredient.propTypes = {
  el: PropTypes.object.isRequired,
};

export default Ingredient;
