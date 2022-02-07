import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import style from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import {
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { API_URL, URL_KEY_ORDERS } from "../../constants/api-url";
import { useData } from "../App/App";

function BurgerConstructor({ onOpen, handleSetOrder }) {
  const data = useData();
  const [ingredients] = useState({
    bun: data.find((el) => el.type === "bun"),
    main: data.filter((el) => el.type !== "bun").slice(7, 10),
    sumId: [
      ...data
        .filter((el) => el.type !== "bun")
        .map((el) => el._id)
        .slice(7, 10),
      data.find((el) => el.type === "bun")._id,
    ],
  });

  const sum = () => {
    const mainPrice = ingredients.main
      .map((el) => el.price)
      .reduce((sum, el) => sum + el, 0);
    const bunPrice = ingredients.bun.price;
    const sum = mainPrice + bunPrice * 2;
    return sum;
  };

  useEffect(() => {
    axios
      .post(`${API_URL + URL_KEY_ORDERS}`, {
        ingredients: ingredients.sumId,
      })
      .then((res) => {
        handleSetOrder(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={style.container}>
      <div className={"mt-25 mb-10"}>
        <div className={style.item + " mb-4 ml-4 mr-4 pl-8"}>
          <ConstructorElement
            type={"top"}
            isLocked={true}
            text={ingredients.bun.name}
            thumbnail={ingredients.bun.image}
            price={ingredients.bun.price}
          />
        </div>

        <ul className={style.list}>
          {ingredients.main.map((el) => {
            return (
              <li className={style.item + " mb-4 ml-4 mr-1"} key={el._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={el.name}
                  thumbnail={el.image}
                  price={el.price}
                />
              </li>
            );
          })}
        </ul>
        <div className={style.item + " mt-4 ml-4 mr-4 pl-8"}>
          <ConstructorElement
            type={"bottom"}
            isLocked={true}
            text={ingredients.bun.name}
            thumbnail={ingredients.bun.image}
            price={ingredients.bun.price}
          />
        </div>
      </div>
      <div className={style.checkout}>
        <p className="text text_type_digits-medium">{sum()}</p>
        <div className={style.icon}>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={onOpen} size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default BurgerConstructor;
