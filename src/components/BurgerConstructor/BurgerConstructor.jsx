import PropTypes from "prop-types";
import ingredientPropTypes from "../../constants/ingredient-prop-types";
import style from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import {
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { useData } from "../App/App";

function BurgerConstructor({ onOpen }) {
  const data = useData();
  const ingredient = data.filter((el) => el.type !== "bun");

  // сумма стоимости всех ингридиентов (демо, для отображения)
  let total = 0;
  data.map((el) => {
    total += el.price;
  });
  //  //  //

  return (
    <section className={style.container}>
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
        <ul className={style.list}>
          {ingredient.map((el) => {
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
      <div className={style.checkout}>
        <p className="text text_type_digits-medium">{total}</p>
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
  // data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default BurgerConstructor;
