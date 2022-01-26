import { useState, useEffect } from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientsDetails from "../IngredientDetails/IngredientDetails";
import { getIngredients } from "../../utils/utils";

export default function App() {
  const [data, setData] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState("");

  useEffect(() => {
    getIngredients()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openOrderModal = () => {
    setShowOrder(true);
  };
  const closeOrderModal = () => {
    setShowOrder(false);
  };

  const openIngredientModal = (e) => {
    setCurrentIngredient(e.currentTarget.id);
  };
  const closeIngredientModal = () => {
    setCurrentIngredient("");
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients open={openIngredientModal} data={data} />
        <BurgerConstructor open={openOrderModal} data={data} />
      </main>

      {showOrder && (
        <Modal close={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
      {currentIngredient && (
        <Modal close={closeIngredientModal} title={"Детали ингредиента"}>
          <IngredientsDetails
            data={data}
            currentIngredient={currentIngredient}
          />
        </Modal>
      )}
    </>
  );
}
