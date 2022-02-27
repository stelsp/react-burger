import style from "./BurgerConstructor.module.css";
import { useCallback, useMemo } from "react";
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
    return inner ? [...inner.map((el) => el._id), outer._id] : [];
  }, [inner, outer]);

  const ingredientsPrice = useMemo(() => {
    return inner
      ? inner.reduce((sum, el) => sum + el.price, outer.price * 2)
      : 0;
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
      {outer ? (
        <>
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
            {inner.length > 0 ? (
              <ul className={style.list}>
                {inner.map((el) => {
                  return (
                    <li
                      key={nanoid()}
                      className={style.item + " mb-4 ml-4 mr-1"}
                    >
                      <DragIcon type="primary" />
                      <ConstructorElement
                        text={el.name}
                        thumbnail={el.image}
                        price={el.price}
                        handleClose={() =>
                          dispatch(deleteConstructorIngr(inner, el.id))
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className={"mt-10 mb-10 ml-25"}>
                <h3 className={style.description}>
                  Теперь добавьте ингридиенты!
                </h3>
              </div>
            )}
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
        </>
      ) : (
        <div className={"mt-25 mb-10"}>
          <h2 className={style.title}>Соберите свой бургер!</h2>
          <h3 className={style.description}>Начните с булки.</h3>
          <h3 className={style.description}>
            Перетаскивайте ингридиенты из списка слева.
          </h3>
        </div>
      )}
    </section>
  );
}

export default BurgerConstructor;
