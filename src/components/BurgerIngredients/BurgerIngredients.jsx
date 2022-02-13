import styles from "./BurgerIngredients.module.css";
import { useMemo } from "react";
import { useData } from "../../services/DataProvider";
import IngredientType from "./IngredientType/IngredientType";
import Tabs from "./Tabs/Tabs";
import {
  INGREDIENT_CATEGORY,
  BURGER_INGREDIENTS_TITLE,
} from "../../constants/content";

function BurgerIngredients() {
  const data = useData();

  const bun = useMemo(() => {
    return data.filter((el) => el.type === "bun");
  }, [data]);

  const sauce = useMemo(() => {
    return data.filter((el) => el.type === "sauce");
  }, [data]);

  const main = useMemo(() => {
    return data.filter((el) => el.type === "main");
  }, [data]);

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
