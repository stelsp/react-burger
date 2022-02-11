import styles from "./BurgerIngredients.module.css";
import IngredientType from "./IngredientType/IngredientType";
import Tabs from "./Tabs/Tabs";
import { useData } from "../../services/DataProvider";
import {
  INGREDIENT_TYPE,
  BURGER_INGREDIENTS_TITLE,
} from "../../constants/content";

function BurgerIngredients() {
  const { data } = useData();
  const bun = data.filter((el) => el.type === "bun");
  const sauce = data.filter((el) => el.type === "sauce");
  const main = data.filter((el) => el.type === "main");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{BURGER_INGREDIENTS_TITLE}</h2>
      <Tabs />
      <div className={styles.list}>
        <IngredientType type={bun} title={INGREDIENT_TYPE.BUN} />
        <IngredientType type={sauce} title={INGREDIENT_TYPE.SAUCE} />
        <IngredientType type={main} title={INGREDIENT_TYPE.MAIN} />
      </div>
    </div>
  );
}

export default BurgerIngredients;
