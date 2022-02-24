import styles from "./BurgerIngredients.module.css";
import IngredientType from "./IngredientType/IngredientType";
import Tabs from "./Tabs/Tabs";
import {
  INGREDIENT_CATEGORY,
  BURGER_INGREDIENTS_TITLE,
} from "../../constants/content";
import { useSelector } from "react-redux";
import { useRef } from "react";

function BurgerIngredients() {
  const { bun, sauce, main } = useSelector((store) => ({
    bun: store.ingredientsReducer.category.bun,
    sauce: store.ingredientsReducer.category.sauce,
    main: store.ingredientsReducer.category.main,
  }));

  const bunRef = useRef(null);
  const souceRef = useRef(null);
  const mainRef = useRef(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{BURGER_INGREDIENTS_TITLE}</h2>
      <Tabs bunRef={bunRef} souceRef={souceRef} mainRef={mainRef} />
      <ul className={styles.list}>
        <li ref={bunRef}>
          <IngredientType category={bun} title={INGREDIENT_CATEGORY.BUN} />
        </li>
        <li ref={souceRef}>
          <IngredientType category={sauce} title={INGREDIENT_CATEGORY.SAUCE} />
        </li>
        <li ref={mainRef}>
          <IngredientType category={main} title={INGREDIENT_CATEGORY.MAIN} />
        </li>
      </ul>
    </div>
  );
}

export default BurgerIngredients;
