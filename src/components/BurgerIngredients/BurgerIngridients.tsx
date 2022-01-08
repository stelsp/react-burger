import styles from "./BurgerIngredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";

export default function BurgerIngredients() {
  return (
    <div className={"pt-10 " + styles.BurgerIngredients}>
      <h2
        className={
          "text text_type_main-large text_color_primary" + styles.title
        }
      >
        Соберите бургер
      </h2>
    </div>
  );
}
