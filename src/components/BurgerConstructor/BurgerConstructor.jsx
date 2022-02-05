import PropTypes from "prop-types";
// import ingredientPropTypes from "../../constants/ingredient-prop-types";
import style from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import {
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { useData } from "../App/App";

function BurgerConstructor({ onOpen, addIngredient, removeIngredient }) {
  const data = useData();
  const ingredient = data.filter((el) => el._id === addIngredient);
  const main = ingredient.filter((el) => el.type !== "bun");
  const bun = ingredient.filter((el) => el.type === "bun");

  // сумма стоимости всех ингридиентов (демо, для отображения)
  let total = 0;
  data.map((el) => {
    total += el.price;
  });
  //  //  //

  return (
    <section className={style.container}>
      <div className={"mt-25 mb-10"}>
        {bun.map((el) => {
          return (
            <div className={style.item + " mb-4 ml-4 mr-4 pl-8"}>
              <ConstructorElement
                type={"top"}
                isLocked={true}
                text={el.name}
                thumbnail={el.image}
                price={el.price}
              />
            </div>
          );
        })}
        <ul className={style.list}>
          {main.map((el) => {
            return (
              <li className={style.item + " mb-4 ml-4 mr-1"} key={el._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  handleClose={removeIngredient}
                  text={el.name}
                  thumbnail={el.image}
                  price={el.price}
                />
              </li>
            );
          })}
        </ul>
        {bun.map((el) => {
          return (
            <div className={style.item + " ml-4 mr-4 pl-8"}>
              <ConstructorElement
                type={"bottom"}
                isLocked={true}
                text={el.name}
                thumbnail={el.image}
                price={el.price}
              />
            </div>
          );
        })}
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
