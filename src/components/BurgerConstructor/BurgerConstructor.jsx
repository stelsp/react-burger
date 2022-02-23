import style from "./BurgerConstructor.module.css";
import { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Checkout from "./Checkout/Checkout";
import { useSelector, shallowEqual } from "react-redux";

function BurgerConstructor() {
  const { bun, main } = useSelector(
    (store) => ({
      bun: store.reducer.bun.find((el) => el.type === "bun"), // FIXME: .find временно
      main: [
        ...store.reducer.main.slice(2, 6),
        ...store.reducer.sauce.slice(2, 6),
      ], // FIXME: .slice временно
    }),
    shallowEqual
  );

  const ingredientsIDs = useMemo(() => {
    return [...main.map((el) => el._id), bun._id];
  }, [main, bun]);

  const ingredientsPrice = useMemo(() => {
    return main.reduce((sum, el) => sum + el.price, bun.price * 2);
  }, [main, bun]);

  return (
    <section className={style.container}>
      <div className={"mt-25 mb-10"}>
        <div className={style.item + " mb-4 ml-4 mr-4 pl-8"}>
          <ConstructorElement
            type={"top"}
            isLocked={true}
            text={`${bun.name} (верх)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        </div>

        <ul className={style.list}>
          {main.map((el) => {
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
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
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
