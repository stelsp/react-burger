import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { DataContext } from "./DataContext";
import { API_URL, URL_KEY_INGREDIENTS } from "../../constants/api-url";

export function useData() {
  return useContext(DataContext);
}

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${API_URL + URL_KEY_INGREDIENTS}`)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(!loading));
  }, []);

  return (
    <DataContext.Provider value={data}>
      <AppHeader />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      )}
    </DataContext.Provider>
  );
}
