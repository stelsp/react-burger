import React from "react";
import PropTypes from "prop-types";

import styles from "./card.module.css";

import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

function Card({ name, image, price, open }: any) {
  return (
    <li className={styles.card + " mt-6 mb-6 ml-4"} onClick={open}>
      <Counter count={1} size={"default"} />
      <img src={image} alt={name} className={"mr-4 ml-4"} />
      <p
        className={
          styles.price +
          " text text_type_digits-default text_color_primary mt-1 mb-2"
        }
      >
        <span className={"pr-2"}>{price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <h3
        className={
          styles.cardTitle + " text text_type_main-default text_color_primary"
        }
      >
        {name}
      </h3>
    </li>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  open: PropTypes.any.isRequired,
};

export default Card;
