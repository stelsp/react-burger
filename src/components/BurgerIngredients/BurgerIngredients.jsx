import styles from "./BurgerIngredients.module.css";
import { useData } from "../App/App";
import IngredientCategory from "./IngredientCategory/IngredientCategory";
import Tabs from "./Tabs/Tabs";

function BurgerIngredients() {
  const data = useData();

  const bun = data.filter((el) => el.type === "bun");
  const sauce = data.filter((el) => el.type === "sauce");
  const main = data.filter((el) => el.type === "main");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <Tabs />
      <div className={styles.list}>
        <IngredientCategory category={bun} title={"Булки"} />
        <IngredientCategory category={sauce} title={"Соусы"} />
        <IngredientCategory category={main} title={"Начинки"} />
      </div>
    </div>
  );
}

export default BurgerIngredients;
