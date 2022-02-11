import { useCallback, useMemo, useState } from "react";
import style from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import {
  DragIcon,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { useData } from "../App/App";
import { ORDER_BUTTON_TEXT } from "../../constants/constants";
import OrderDetails from "./OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import axios from "axios";
import { API_URL, URL_KEY_ORDERS } from "../../constants/api-url";

function BurgerConstructor() {
  const data = useData();
  const bun = data.find((el) => el.type === "bun");
  const main = data.filter((el) => el.type !== "bun");
  const ingredientsIDs = [...main.map((el) => el._id), bun._id];

  const sumPrice = useMemo(() => {
    const mainPrice = main.reduce((sum, el) => sum + el.price, 0);
    const bunPrice = bun.price;
    const sum = mainPrice + bunPrice * 2;
    return sum;
  }, [data]);

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
      <Checkout ingredientsIDs={ingredientsIDs} sumPrice={sumPrice} />
    </section>
  );
}

export default BurgerConstructor;

function Checkout({ ingredientsIDs, sumPrice }) {
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState(false);

  const postIDs = () => {
    axios
      .post(`${API_URL + URL_KEY_ORDERS}`, {
        ingredients: ingredientsIDs,
      })
      .then(({ data }) => {
        setOrder(data);
        setShow(true);
      })
      .catch((err) => console.log(err));
  };

  const openModal = () => postIDs();
  const closeModal = () => setShow(false);

  return (
    <>
      <div className={style.checkout}>
        <p className="text text_type_digits-medium">{sumPrice}</p>
        <div className={style.icon}>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={openModal} size="large">
          {ORDER_BUTTON_TEXT}
        </Button>
      </div>
      {show && (
        <Modal onClose={closeModal}>
          <OrderDetails order={order}></OrderDetails>
        </Modal>
      )}
    </>
  );
}
