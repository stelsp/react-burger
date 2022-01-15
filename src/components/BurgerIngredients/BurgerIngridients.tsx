import React from "react";

import styles from "./BurgerIngredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import Card from "./Card";

export default function BurgerIngredients() {
  const titleStyle = "text text_type_main-medium text_color_primary ";

  const [current, setCurrent] = React.useState("one");

  return (
    <div className={"mt-10 " + styles.BurgerIngredients}>
      <h2 className={"text text_type_main-large text_color_primary "}>
        Соберите бургер
      </h2>

      <div className="mt-5 mb-10 " style={{ display: "flex" }}>
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
      <div className={styles.ingredientsList}>
        <h3 className={titleStyle}>Булки</h3>
        <div className={styles.cardList}>
          <Card />
          <Card />
        </div>

        <h3 className={titleStyle}>Соусы</h3>
        <div className={styles.cardList}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <h3 className={titleStyle}>Начинки</h3>
        <div className={styles.cardList}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
