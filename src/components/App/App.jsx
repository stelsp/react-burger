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
  const { ingredientsRequest, ingredientsFailed } = useSelector((store) => ({
    ingredientsRequest: store.ingredients.ingredientsRequest,
    ingredientsFailed: store.ingredients.ingredientsFailed,
  }));

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      {ingredientsRequest ? (
        <Loader />
      ) : ingredientsFailed ? (
        <h1>Произошла ошибка при получении данных</h1>
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
