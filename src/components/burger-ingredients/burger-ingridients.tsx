import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./burger-ingredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import Card from "../card/card";

function BurgerIngredients({ data, open }: any) {
  const titleStyle = "text text_type_main-medium text_color_primary ";

  const [current, setCurrent] = useState("one");

  return (
    <div className={styles.container + " mt-10"}>
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
      <div className={styles.list + " custom-scroll"}>
        <h3 className={titleStyle}>Булки</h3>
        <ul className={styles.cards}>
          {data.map((el: any) => {
            if (el.type === "bun") {
              return (
                <Card
                  name={el.name}
                  image={el.image}
                  price={el.price}
                  key={el._id}
                  open={open}
                />
              );
            }
          })}
        </ul>
        <h3 className={titleStyle + " mt-10"}>Соусы</h3>
        <ul className={styles.cards}>
          {data.map((el: any) => {
            if (el.type === "sauce") {
              return (
                <Card
                  name={el.name}
                  image={el.image}
                  price={el.price}
                  key={el._id}
                  open={open}
                />
              );
            }
          })}
        </ul>
        <h3 className={titleStyle + " mt-10"}>Начинки</h3>
        <ul className={styles.cards}>
          {data.map((el: any) => {
            if (el.type === "main") {
              return (
                <Card
                  name={el.name}
                  image={el.image}
                  price={el.price}
                  key={el._id}
                  open={open}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
  open: PropTypes.func.isRequired,
};

export default BurgerIngredients;
