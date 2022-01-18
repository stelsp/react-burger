import React, { useState, useEffect } from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

let url = "https://norma.nomoreparties.space/api/ingredients";

export default function App() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const toggleModal = () => {
    return setIsOpen((value) => !value);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor onOpen={toggleModal} data={data} />
      </main>

      <Modal open={isOpen} onClose={toggleModal}>
        <OrderDetails />
      </Modal>
    </div>
  );
}
