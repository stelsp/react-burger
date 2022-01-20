import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import Card from "../card/card";
import ingredientPropTypes from "../../constants/ingredient-prop-types";

function BurgerIngredients({ data, open }) {
  const bun = data.filter((el) => el.type === "bun");
  const sauce = data.filter((el) => el.type === "sauce");
  const main = data.filter((el) => el.type === "main");

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
          {bun.map((el) => {
            return (
              <Card
                name={el.name}
                image={el.image}
                price={el.price}
                key={el._id}
                id={el._id}
                open={open}
              />
            );
          })}
        </ul>
        <h3 className={titleStyle + " mt-10"}>Соусы</h3>
        <ul className={styles.cards}>
          {sauce.map((el) => {
            return (
              <Card
                name={el.name}
                image={el.image}
                price={el.price}
                key={el._id}
                id={el._id}
                open={open}
              />
            );
          })}
        </ul>
        <h3 className={titleStyle + " mt-10"}>Начинки</h3>
        <ul className={styles.cards}>
          {main.map((el) => {
            return (
              <Card
                name={el.name}
                image={el.image}
                price={el.price}
                key={el._id}
                id={el._id}
                open={open}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  open: PropTypes.func.isRequired,
};

export default BurgerIngredients;
