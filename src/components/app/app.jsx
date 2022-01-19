import { useState, useEffect } from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientsDetails from "../ingredient-details/ingredient-details";

const API_URL = "https://norma.nomoreparties.space/api";

export default function App() {
  const [data, setData] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState("");

  const toggleOrderModal = () => {
    setShowOrder((value) => !value);
  };

  const toggleIngredientModal = (e) => {
    setCurrentIngredient(e.currentTarget.id);
  };

  const checkRes = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status + " - " + res.statusText}`);
  };

  useEffect(() => {
    fetch(`${API_URL}/ingredients`)
      .then(checkRes)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients open={toggleIngredientModal} data={data} />
        <BurgerConstructor open={toggleOrderModal} data={data} />
      </main>

      {showOrder && (
        <Modal close={toggleOrderModal}>
          <OrderDetails />
        </Modal>
      )}
      {currentIngredient && (
        <Modal close={toggleIngredientModal} title={"Детали ингредиента"}>
          <IngredientsDetails
            data={data}
            currentIngredient={currentIngredient}
          />
        </Modal>
      )}
    </>
  );
}
