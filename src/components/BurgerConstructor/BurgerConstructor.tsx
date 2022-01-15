import style from "./BurgerConstructor.module.css";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";

import {
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
export default function BurgerConstructor({ data }: any) {
  // const element = [
  //   {
  //     type: undefined,
  //     isLocked: undefined,
  //     handleClose: undefined,
  //     text: "Краторная булка N-200i",
  //     thumbnail: require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png"),
  //     price: 20,
  //   },
  //   {
  //     type: undefined,
  //     isLocked: undefined,
  //     handleClose: undefined,
  //     text: "Краторная булка N-200i",
  //     thumbnail: require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png"),
  //     price: 20,
  //   },
  //   {
  //     type: undefined,
  //     isLocked: undefined,
  //     handleClose: undefined,
  //     text: "Краторная булка N-200i",
  //     thumbnail: require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png"),
  //     price: 20,
  //   },
  //   {
  //     type: undefined,
  //     isLocked: undefined,
  //     handleClose: undefined,
  //     text: "Краторная булка N-200i",
  //     thumbnail: require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png"),
  //     price: 20,
  //   },
  //   {
  //     type: undefined,
  //     isLocked: undefined,
  //     handleClose: undefined,
  //     text: "Краторная булка N-200i",
  //     thumbnail: require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png"),
  //     price: 20,
  //   },
  // ];
  return (
    <div className={" " + style.BurgerConstructor}>
      <div className={"mt-25 mb-10 " + style.list}>
        <div className={"mb-4 ml-4 mr-4 pl-8 " + style.item}>
          <ConstructorElement
            type={"top"}
            isLocked={true}
            text={"Краторная булка N-200i (верх)"}
            thumbnail={require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png")}
            price={20}
          />
        </div>
        <ul className={"text " + style.ingredients}>
          {data.map((el: any) => {
            return (
              <li className={"mb-4 ml-4 mr-1 " + style.item}>
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
        <div className={"ml-4 mr-4 pl-8 " + style.item}>
          <ConstructorElement
            type={"bottom"}
            isLocked={true}
            text={"Краторная булка N-200i (низ)"}
            thumbnail={require("@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png")}
            price={20}
          />
        </div>
      </div>
      <div className={" " + style.checkout}>
        <p className="text text_type_digits-medium">610</p>
        <div className={style.test}>
          <CurrencyIcon type="primary" />
        </div>
        <Button size="large">Оформить заказ</Button>
      </div>
    </div>
  );
}
