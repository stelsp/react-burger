import { useState, useEffect } from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientsDetails from "../IngredientDetails/IngredientDetails";
// import { getIngredients } from "../../utils/utils";
import { DataProvider } from "./DataContext";

export default function App() {
  // const [loading, setLoading] = useState(true);
  const [showOrder, setShowOrder] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState("");

  // useEffect(() => {
  //   getIngredients()
  //     .then(({ data }) => setData(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(!loading));
  // }, []);

  const openOrderModal = () => setShowOrder(!showOrder);
  const closeOrderModal = () => setShowOrder(!showOrder);

  const openIngredientModal = (e) => setCurrentIngredient(e.currentTarget.id);
  const closeIngredientModal = () => setCurrentIngredient("");

  return (
    <DataProvider>
      <AppHeader />
      {/* {loading ? (
        <h1>Loading...</h1>
      ) : ( */}
      <main className={styles.main}>
        <BurgerIngredients onOpen={openIngredientModal} />
        <BurgerConstructor onOpen={openOrderModal} />
      </main>
      {/* )} */}
      {showOrder && (
        <Modal onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
      {currentIngredient && (
        <Modal onClose={closeIngredientModal} title={"Детали ингредиента"}>
          <IngredientsDetails currentIngredient={currentIngredient} />
        </Modal>
      )}
    </DataProvider>
  );
}
