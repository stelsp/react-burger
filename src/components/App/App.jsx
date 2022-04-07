import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Loader from "../Loader/Loader";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ResetPassword from "../ResetPassword/ResetPassword";
import Profile from "../Profile/Profile";
import NotFound404 from "../NotFound404/NotFound404";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../utils/api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { RouteUserIn, RouteUserOut } from "../ProtectedRoute/ProtectedRoute";

export default function App() {
  const dispatch = useDispatch();
  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  useEffect(() => {
    dispatch(getData());
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
                <main className={styles.main}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </main>
              </Route>
              <RouteUserOut path="/profile" to="/login" exact={true}>
                <main className={styles.profile}>
                  <Profile />
                </main>
              </RouteUserOut>
              <RouteUserIn path="/register" to="/" exact={true}>
                <main className={styles.login}>
                  <Register />
                </main>
              </RouteUserIn>
              <RouteUserIn path="/login" to="/" exact={true}>
                <main className={styles.login}>
                  <Login />
                </main>
              </RouteUserIn>
              <RouteUserIn path="/forgot-password" to="/" exact={true}>
                <main className={styles.login}>
                  <ForgotPassword />
                </main>
              </RouteUserIn>
              <RouteUserIn path="/reset-password" to="/" exact={true}>
                <main className={styles.login}>
                  <ResetPassword />
                </main>
              </RouteUserIn>
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
