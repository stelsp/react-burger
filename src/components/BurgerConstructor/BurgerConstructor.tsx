import style from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import Checkout from "../Checkout/Checkout";
import { useSelector, useDispatch } from "react-redux";
import { deleteConstructorIngredient } from "../../services/actions/constructorActions";
import {
  dragIngredient,
  sortIngredient,
} from "../../services/actions/ingredientsActions";
import { useDrop, useDrag } from "react-dnd";
import { FC, useCallback } from "react";
import { RootState } from "../../services/rootReducer";

interface IInner {
  id: string;
  name: string;
  image: string;
  price: number;
  moveCard: () => void;
  findCard: () => void;
}

interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  id: string;
}

type TfindCard = (id: number) => IIngredient;

const Inner: FC<IInner> = ({ id, name, image, price, moveCard, findCard }) => {
  const dispatch = useDispatch();
  const { inner } = useSelector((store: RootState) => ({
    inner: store.burgerConstructor.inner,
  }));

  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "card",
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );
  const [, drop3] = useDrop(
    () => ({
      accept: "card",
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );
  const opacity = isDragging ? 0 : 1;

  return (
    <li
      className={style.item + " mb-4 ml-4 mr-1"}
      ref={(node) => drag(drop3(node))}
      style={{ opacity }}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        thumbnail={image}
        price={price}
        handleClose={() => dispatch(deleteConstructorIngredient(inner, id))}
      />
    </li>
  );
};

function BurgerConstructor() {
  const dispatch = useDispatch();
  const { outer, inner } = useSelector(
    (store: RootState) => store.burgerConstructor
  );

  const [, drop] = useDrop(
    () => ({
      accept: "ingredient",
      drop(item) {
        dispatch(dragIngredient(inner, item));
      },
    }),
    [inner, dispatch]
  );

  const findCard = useCallback<TfindCard>(
    (id) => {
      const card = inner.filter((el: IIngredient) => el.id === id)[0];
      return {
        card,
        index: inner.indexOf(card),
      };
    },
    [inner]
  );
  const moveCard = useCallback(
    (id: string, atIndex: string) => {
      const { card, index } = findCard(id);
      dispatch(sortIngredient(card, index, atIndex, inner));
    },
    [findCard, dispatch, inner]
  );
  const [, drop2] = useDrop(() => ({ accept: "card" }));

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
              <ul className={style.list} ref={drop2}>
                {inner.map((el: IIngredient) => {
                  return (
                    <Inner
                      key={el.id}
                      id={el.id}
                      name={el.name}
                      image={el.image}
                      price={el.price}
                      moveCard={moveCard}
                      findCard={findCard}
                    />
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
