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
import Profile from "../Profile/Profile";
import { NotFound404 } from "../NotFound404/NotFound404";
import { getCookie } from "../../utils/cookie";
import { Redirect } from "react-router-dom";

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
      <DndProvider backend={HTML5Backend}>
        {ingredientsRequest ? (
          <Loader />
        ) : ingredientsFailed ? (
          <h1>Произошла ошибка при получении данных</h1>
        ) : (
          <>
            <AppHeader />
            <Switch>
              <Route path="/" exact={true}>
                {getCookie("token") ? (
                  <main className={styles.main}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                  </main>
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="/register" exact={true}>
                <main className={styles.login}>
                  <Register />
                </main>
              </Route>
              <Route path="/login" exact={true}>
                {getCookie("token") ? (
                  <Redirect to="/" />
                ) : (
                  <main className={styles.login}>
                    <Login />
                  </main>
                )}
              </Route>
              <Route path="/forgot-password" exact={true}>
                <main className={styles.login}>
                  <ForgotPassword />
                </main>
              </Route>
              <Route path="/reset-password" exact={true}>
                <main className={styles.login}>
                  <ResetPassword />
                </main>
              </Route>
              <Route path="/profile" exact={true}>
                {getCookie("token") ? (
                  <main className={styles.profile}>
                    <Profile />
                  </main>
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="/ingredients/:id" exact={true}>
                ingredients/:id
              </Route>
              <Route>
                <main className={styles.login}>
                  <NotFound404 />
                </main>
              </Route>
            </Switch>
          </>
        )}
      </DndProvider>
    </Router>
  );
}
