import styles from "./BurgerIngredients.module.css";
import IngredientType from "./IngredientType/IngredientType";
import Tabs from "./Tabs/Tabs";
import {
  INGREDIENT_CATEGORY,
  BURGER_INGREDIENTS_TITLE,
} from "../../constants/content";
import { useSelector, shallowEqual } from "react-redux";

function BurgerIngredients() {
  const { bun, sauce, main } = useSelector(
    (store) => ({
      bun: store.data.filter((el) => el.type === "bun"),
      sauce: store.data.filter((el) => el.type === "sauce"),
      main: store.data.filter((el) => el.type === "main"),
    }),
    shallowEqual
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{BURGER_INGREDIENTS_TITLE}</h2>
      <Tabs />
      <div className={styles.list}>
        <IngredientType category={bun} title={INGREDIENT_CATEGORY.BUN} />
        <IngredientType category={sauce} title={INGREDIENT_CATEGORY.SAUCE} />
        <IngredientType category={main} title={INGREDIENT_CATEGORY.MAIN} />
      </div>
    </div>
  );
}

export default BurgerIngredients;
