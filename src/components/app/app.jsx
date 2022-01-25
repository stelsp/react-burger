import { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientsDetails from "../ingredient-details/ingredient-details";
import API_URL from "../../constants/api-url";

export default function App() {
  const [data, setData] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState("");

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

  const checkRes = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status + " - " + res.statusText}`);
  };

  const getApi = (api) => {
    const promise = fetch(`${API_URL}/${api}`).then(checkRes);
    return promise;
  };

  const getIngredients = getApi.bind(null, "ingredients");

  useEffect(() => {
    getIngredients()
      .then((res) => {
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
