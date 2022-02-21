import axios from "axios";
import { useEffect } from "react";
import { API_URL, URL_KEY_INGREDIENTS } from "../../constants/api-url";
import Loader from "../Loader/Loader";
import { getData } from "../../services/actions";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingFalse } from "../../services/actions";

import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);

  useEffect(() => {
    axios
      .get(`${API_URL}${URL_KEY_INGREDIENTS}`)
      .then(({ data }) => {
        dispatch(getData(data.data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoadingFalse(false)));
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AppHeader />
          <main className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </>
      )}
    </>
  );
}
