import React from "react";
import PropTypes from "prop-types";

import style from "./burger-constructor.module.css";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";

import {
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { isPlusToken } from "typescript";

function BurgerConstructor({ data }: any) {
  return (
    <div className={style.container}>
      <div className={"mt-25 mb-10"}>
        <div className={style.item + " mb-4 ml-4 mr-4 pl-8"}>
          <ConstructorElement
            type={"top"}
            isLocked={true}
            text={"Краторная булка N-200i (верх)"}
            thumbnail={require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png")}
            price={20}
          />
        </div>
        <ul className={style.list + " text custom-scroll"}>
          {data.map((el: any) => {
            return (
              <li className={style.item + " mb-4 ml-4 mr-1"} key={el._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  type={el.type}
                  handleClose={el.handleClose}
                  text={el.name}
                  thumbnail={el.image}
                  price={el.price}
                />
              </li>
            );
          })}
        </ul>
        <div className={style.item + " ml-4 mr-4 pl-8"}>
          <ConstructorElement
            type={"bottom"}
            isLocked={true}
            text={"Краторная булка N-200i (низ)"}
            thumbnail={require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png")}
            price={20}
          />
        </div>
      </div>
      <div className={style.checkout + " mr-4"}>
        <p className="text text_type_digits-medium">610</p>
        <div className={style.icon + " mr-10"}>
          <CurrencyIcon type="primary" />
        </div>
        <Button size="large">Оформить заказ</Button>
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerConstructor;
