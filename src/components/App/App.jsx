import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientsDetails from "../IngredientDetails/IngredientDetails";
import { DataContext } from "./DataContext";
import {
  API_URL,
  URL_KEY_INGREDIENTS,
  URL_KEY_ORDERS,
} from "../../constants/api-url";

export function useData() {
  return useContext(DataContext);
}

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOrder, setShowOrder] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState("");

  // const [order, setOrder] = useState({});
  // const [loadingOrder, setLoadingOrder] = useState(true);
  // useEffect(() => {
  //   axios
  //     .post(`${API_URL + URL_KEY_ORDERS}`, { ingredients: sumId })
  //     .then((res) => {
  //       setOrder(res);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoadingOrder(!loadingOrder));
  // }, []);

  const openOrderModal = () => setShowOrder(!showOrder);
  const closeOrderModal = () => setShowOrder(!showOrder);

  const openIngredientModal = (e) => setCurrentIngredient(e.currentTarget.id);
  const closeIngredientModal = () => setCurrentIngredient("");

  useEffect(() => {
    axios
      .get(`${API_URL + URL_KEY_INGREDIENTS}`)
      .then(({ data }) => setData(data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(!loading));
  }, []);

  // const sumId = [...main.map((el) => el._id), bun._id];
  return (
    <DataContext.Provider value={data}>
      <AppHeader />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <main className={styles.main}>
          <BurgerIngredients onOpen={openIngredientModal} />
          <BurgerConstructor onOpen={openOrderModal} />
        </main>
      )}
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
    </DataContext.Provider>
  );
}
