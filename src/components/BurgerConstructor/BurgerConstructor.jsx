import style from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Checkout from "./Checkout/Checkout";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteConstructorIngredient,
  dragIngredient,
} from "../../services/actions/actions";
import { useDrop } from "react-dnd";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const { outer, inner } = useSelector((store) => ({
    outer: store.constructo.outer,
    inner: store.constructo.inner,
  }));

  const [, drop] = useDrop(
    () => ({
      accept: "ingredient",
      drop(item) {
        dispatch(dragIngredient(inner, item));
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
                    <li key={el.id} className={style.item + " mb-4 ml-4 mr-1"}>
                      <DragIcon type="primary" />
                      <ConstructorElement
                        text={el.name}
                        thumbnail={el.image}
                        price={el.price}
                        handleClose={() =>
                          dispatch(deleteConstructorIngredient(inner, el.id))
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
          <Checkout />
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
