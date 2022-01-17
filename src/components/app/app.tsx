import React, { useState } from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import data from "../../utils/data";

let url = "https://norma.nomoreparties.space/api/ingredients";

const getData = () =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let info = res.data;
      return info;
    });

getData();

export default function App() {
  const [state, setState] = useState([]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}
