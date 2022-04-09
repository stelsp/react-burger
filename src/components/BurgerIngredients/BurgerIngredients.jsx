import styles from "./BurgerIngredients.module.css";
import IngredientType from "./IngredientType/IngredientType";
// import IngredientDetails from "../BurgerIngredients/IngredientDetails/IngredientDetails";
// import Modal from "../Modal/Modal";
// import { MODAL_TITLE_INGREDIENT } from "../../constants/content";
// import { Route, useLocation } from "react-router-dom";
// import { setCurrentIngredient } from "../../services/actions/ingredientsActions";

import Tabs from "./Tabs/Tabs";
import {
  INGREDIENT_CATEGORY,
  BURGER_INGREDIENTS_TITLE,
} from "../../constants/content";
import { useCallback, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTab } from "../../services/actions/ingredientsActions";

function BurgerIngredients() {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store.ingredients);

  const bun = useMemo(
    () => ingredients.filter((el) => el.type === "bun"),
    [ingredients]
  );
  const sauce = useMemo(
    () => ingredients.filter((el) => el.type === "sauce"),
    [ingredients]
  );
  const main = useMemo(
    () => ingredients.filter((el) => el.type === "main"),
    [ingredients]
  );

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  const refContainer = useRef();

  const onScroll = useCallback(() => {
    const scrollTop = refContainer.current.scrollTop;
    if (scrollTop <= bunRef.current.offsetTop) dispatch(setCurrentTab("bun"));
    if (scrollTop >= sauceRef.current.offsetTop - bunRef.current.offsetTop - 50)
      dispatch(setCurrentTab("sauce"));
    if (scrollTop >= mainRef.current.offsetTop - bunRef.current.offsetTop - 50)
      dispatch(setCurrentTab("main"));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{BURGER_INGREDIENTS_TITLE}</h2>
      <Tabs bunRef={bunRef} sauceRef={sauceRef} mainRef={mainRef} />
      <ul className={styles.list} ref={refContainer} onScroll={onScroll}>
        <IngredientType
          ref={bunRef}
          category={bun}
          title={INGREDIENT_CATEGORY.BUN}
        />
        <IngredientType
          ref={sauceRef}
          category={sauce}
          title={INGREDIENT_CATEGORY.SAUCE}
        />
        <IngredientType
          ref={mainRef}
          category={main}
          title={INGREDIENT_CATEGORY.MAIN}
        />
      </ul>
    </div>
  );
}

export default BurgerIngredients;
