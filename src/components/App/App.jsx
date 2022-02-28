import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../utils/api";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.ingredients.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
}
