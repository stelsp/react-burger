import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import styles from "./BurgerIngredients.module.css";

export default function Card() {
  return (
    <div className={"mr-4 ml-4 " + styles.card}>
      <Counter count={1} size={"small"} />
      <img
        src={require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png")}
        alt="#"
        className={"mr-4 ml-4 " + styles.img}
      />
      <p
        className={
          "text text_type_digits-default text_color_primary mt-1 mb-1 " +
          styles.price
        }
      >
        <span className={"pr-2"}>20</span>
        <CurrencyIcon type="primary" />
      </p>
      <h3
        className={
          "text text_type_main-default text_color_primary " + styles.cardTitle
        }
      >
        Краторная булка N-200i
      </h3>
    </div>
  );
}
