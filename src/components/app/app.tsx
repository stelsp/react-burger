import { useState, useEffect } from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import OrderDetails from "../order-details/order-details";
import IngredientsDetails from "../ingredient-details/ingredient-details";

let url = "https://norma.nomoreparties.space/api/ingredients";

export default function App() {
  const [data, setData] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [showIngredient, setShowIngredient] = useState(false);

  const toggleOrderModal = () => {
    return setShowOrder((value) => !value);
  };

  const toggleIngredientModal = () => {
    return setShowIngredient((value) => !value);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients open={toggleIngredientModal} data={data} />
        <BurgerConstructor open={toggleOrderModal} data={data} />
      </main>

      <OrderDetails open={showOrder} close={toggleOrderModal} />
      <IngredientsDetails open={showIngredient} close={toggleIngredientModal} />
    </div>
  );
}
