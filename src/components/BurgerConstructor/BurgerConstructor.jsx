import style from "./BurgerConstructor.module.css";
import { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Checkout from "./Checkout/Checkout";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteConstructorIngr,
  dragIngr,
} from "../../services/actions/actions";
import { useDrop } from "react-dnd";
import { nanoid } from "@reduxjs/toolkit";

function BurgerConstructor() {
  const dispatch = useDispatch();
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

  const [, drop] = useDrop(
    () => ({
      accept: "ingredient",
      drop(item) {
        dispatch(dragIngr(inner, item));
      },
    }),
    [inner, dispatch]
  );

  return (
    <section className={style.container} ref={drop}>
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
              <li key={nanoid()} className={style.item + " mb-4 ml-4 mr-1"}>
                <DragIcon type="primary" />
                <ConstructorElement
                  id={nanoid()}
                  text={el.name}
                  thumbnail={el.image}
                  price={el.price}
                  handleClose={() =>
                    dispatch(deleteConstructorIngr(inner, el._id))
                  }
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
