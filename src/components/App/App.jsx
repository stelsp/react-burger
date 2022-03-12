import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router>
      <Switch>
        <DndProvider backend={HTML5Backend}>
          {ingredientsRequest ? (
            <Loader />
          ) : ingredientsFailed ? (
            <h1>Произошла ошибка при получении данных</h1>
          ) : (
            <>
              <AppHeader />
              <Route path="/" exact={true}>
                <main className={styles.main}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </main>
              </Route>
              <Route path="/login" exact={true}>
                login
              </Route>
              <Route path="/register" exact={true}>
                register
              </Route>
              <Route path="/forgot-password" exact={true}>
                forgot-password
              </Route>
              <Route path="/reset-password" exact={true}>
                reset-password
              </Route>
              <Route path="/profile" exact={true}>
                profile
              </Route>
              <Route path="/ingredients/:id" exact={true}>
                ingredients/:id
              </Route>
            </>
          )}
        </DndProvider>
      </Switch>
    </Router>
  );
}
