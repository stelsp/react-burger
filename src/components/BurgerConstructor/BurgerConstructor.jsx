import style from "./BurgerConstructor.module.css";
import { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Checkout from "./Checkout/Checkout";
import { useSelector } from "react-redux";

function BurgerConstructor() {
  const { outer, inner } = useSelector((store) => ({
    outer: store.constructorReducer.outer,
    inner: store.constructorReducer.inner,
  }));
  const ingredientsIDs = useMemo(() => {
    return [...inner.map((el) => el._id), outer._id];
  }, [inner, outer]);

  const ingredientsPrice = useMemo(() => {
    return inner.reduce((sum, el) => sum + el.price, outer.price * 2);
  }, [inner, outer]);

  return (
    <section className={style.container}>
      <div className={"mt-25 mb-10"}>
        <div className={style.item + " mb-4 ml-4 mr-4 pl-8"}>
          <ConstructorElement
            type={"top"}
            isLocked={true}
            text={`${outer.name} (верх)`}
            thumbnail={outer.image}
            price={outer.price}
          />
        </div>

        <ul className={style.list}>
          {inner.map((el) => {
            return (
              <li key={el._id} className={style.item + " mb-4 ml-4 mr-1"}>
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
            text={`${outer.name} (низ)`}
            thumbnail={outer.image}
            price={outer.price}
          />
        </div>
      </div>
      <Checkout
        ingredientsIDs={ingredientsIDs}
        ingredientsPrice={ingredientsPrice}
      />
    </section>
  );
}

export default BurgerConstructor;
