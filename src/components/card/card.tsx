import React from "react";

import styles from "./card.module.css";

import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

export default function Card() {
  return (
    <li className={styles.card + " mt-6 mb-10 ml-4"}>
      <Counter count={1} size={"default"} />
      <img
        src={require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png")}
        alt="#"
        className={"mr-4 ml-4"}
      />
      <p
        className={
          styles.price +
          " text text_type_digits-default text_color_primary mt-1 mb-2"
        }
      >
        <span className={"pr-2"}>20</span>
        <CurrencyIcon type="primary" />
      </p>
      <h3
        className={
          styles.cardTitle + " text text_type_main-default text_color_primary"
        }
      >
        Краторная булка N-200i
      </h3>
    </li>
  );
}
