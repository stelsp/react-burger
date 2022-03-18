import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Register from "../Register/Register";
import Login from "../Login/Login";

import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../utils/api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ResetPassword from "../ResetPassword/ResetPassword";

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
              <Route path="/register" exact={true}>
                <main className={styles.main__login}>
                  <Register />
                </main>
              </Route>
              <Route path="/login" exact={true}>
                <main className={styles.main__login}>
                  <Login />
                </main>
              </Route>
              <Route path="/forgot-password" exact={true}>
                <main className={styles.main__login}>
                  <ForgotPassword />
                </main>
              </Route>
              <Route path="/reset-password" exact={true}>
                <main className={styles.main__login}>
                  <ResetPassword />
                </main>
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
