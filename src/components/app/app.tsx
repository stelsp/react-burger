import { useState, useEffect } from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientsDetails from "../ingredient-details/ingredient-details";

let API_URL = "https://norma.nomoreparties.space/api/ingredients";

export default function App() {
  const [data, setData] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [showIngredient, setShowIngredient] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState("");

  const toggleOrderModal = () => {
    return setShowOrder((value) => !value);
  };

  const toggleIngredientModal = (e: any) => {
    setCurrentIngredient(e.currentTarget.id);
    return setShowIngredient((value) => !value);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients open={toggleIngredientModal} data={data} />
        <BurgerConstructor open={toggleOrderModal} data={data} />
      </main>
      <Modal open={showOrder} close={toggleOrderModal}>
        <OrderDetails />
      </Modal>

      <IngredientsDetails
        open={showIngredient}
        close={toggleIngredientModal}
        data={data}
        currentIngredient={currentIngredient}
      />
    </>
  );
}
