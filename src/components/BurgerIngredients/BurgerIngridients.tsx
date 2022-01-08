import React from "react";

import styles from "./BurgerIngredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";

export default function BurgerIngredients() {
  const titleStyle =
    "text text_type_main-medium text_color_primary mt-10 mb-6 ";

  const [current, setCurrent] = React.useState("one");

  return (
    <div className={" " + styles.BurgerIngredients}>
      <h2 className={"text text_type_main-large text_color_primary mt-10 mb-5"}>
        Соберите бургер
      </h2>

      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <h3 className={titleStyle}>Булки</h3>
      <h3 className={titleStyle}>Соусы</h3>
      <h3 className={titleStyle}>Начинки</h3>
    </div>
  );
}
