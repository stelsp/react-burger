import styles from "./BurgerIngredients.module.css";
import IngredientType from "../../IngredientType/IngredientType";
import Tabs from "../Tabs/Tabs";
import {
  INGREDIENT_CATEGORY,
  BURGER_INGREDIENTS_TITLE,
} from "../../constants/content";
import { useCallback, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTab } from "../../services/actions/ingredientsActions";
import { RootState } from "../../services/rootReducer";

interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
}

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store: RootState) => store.ingredients);

  const bun: [IIngredient] = useMemo(
    () => ingredients.filter((el: IIngredient) => el.type === "bun"),
    [ingredients]
  );
  const sauce: [IIngredient] = useMemo(
    () => ingredients.filter((el: IIngredient) => el.type === "sauce"),
    [ingredients]
  );
  const main: [IIngredient] = useMemo(
    () => ingredients.filter((el: IIngredient) => el.type === "main"),
    [ingredients]
  );

  const refContainer: any = useRef();
  const bunRef: any = useRef();
  const sauceRef: any = useRef();
  const mainRef: any = useRef();

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
        <li ref={bunRef}>
          <IngredientType category={bun} title={INGREDIENT_CATEGORY.BUN} />
        </li>
        <li ref={sauceRef}>
          <IngredientType category={sauce} title={INGREDIENT_CATEGORY.SAUCE} />
        </li>
        <li ref={mainRef}>
          <IngredientType category={main} title={INGREDIENT_CATEGORY.MAIN} />
        </li>
      </ul>
    </div>
  );
};

export default BurgerIngredients;
