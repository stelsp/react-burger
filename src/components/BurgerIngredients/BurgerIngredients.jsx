import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import Card from "../Card/Card";
import { useData } from "../App/App";

function BurgerIngredients({ onOpen }) {
  const data = useData();
  const bun = data.filter((el) => el.type === "bun");
  const sauce = data.filter((el) => el.type === "sauce");
  const main = data.filter((el) => el.type === "main");
  const [current, setCurrent] = useState("one");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Соберите бургер</h2>
      <div className={styles.tab}>
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
      <div className={styles.list}>
        <h3 className={styles.cards__title}>Булки</h3>
        <ul className={styles.cards}>
          {bun.map((el) => {
            return (
              <Card
                name={el.name}
                image={el.image}
                price={el.price}
                key={el._id}
                id={el._id}
                onOpen={onOpen}
              />
            );
          })}
        </ul>
        <h3 className={styles.cards__title + " mt-10"}>Соусы</h3>
        <ul className={styles.cards}>
          {sauce.map((el) => {
            return (
              <Card
                name={el.name}
                image={el.image}
                price={el.price}
                key={el._id}
                id={el._id}
                onOpen={onOpen}
              />
            );
          })}
        </ul>
        <h3 className={styles.cards__title + " mt-10"}>Начинки</h3>
        <ul className={styles.cards}>
          {main.map((el) => {
            return (
              <Card
                name={el.name}
                image={el.image}
                price={el.price}
                key={el._id}
                id={el._id}
                onOpen={onOpen}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default BurgerIngredients;
