import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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

import { getCookie } from "../../utils/cookie";
import { userIn } from "../../services/actions/profileActions";

export default function App() {
  const dispatch = useDispatch();
  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );
  const { user } = useSelector((store) => store.profile);

  useEffect(() => {
    dispatch(getData());
    if (getCookie("accessToken")) return dispatch(userIn());
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
                {user ? (
                  <main className={styles.main}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                  </main>
                ) : (
                  <Redirect to={{ pathname: "/login" }} />
                )}
              </Route>
              <Route path="/register" exact={true}>
                {user ? (
                  <Redirect to={{ pathname: "/" }} />
                ) : (
                  <main className={styles.login}>
                    <Register />
                  </main>
                )}
              </Route>
              <Route path="/login" exact={true}>
                {user ? (
                  <Redirect to={{ pathname: "/" }} />
                ) : (
                  <main className={styles.login}>
                    <Login />
                  </main>
                )}
              </Route>
              <Route path="/forgot-password" exact={true}>
                {user ? (
                  <Redirect to={{ pathname: "/" }} />
                ) : (
                  <main className={styles.login}>
                    <ForgotPassword />
                  </main>
                )}
              </Route>
              <Route path="/reset-password" exact={true}>
                {user ? (
                  <Redirect to={{ pathname: "/" }} />
                ) : (
                  <main className={styles.login}>
                    <ResetPassword />
                  </main>
                )}
              </Route>
              <Route path="/profile" exact={true}>
                {user ? (
                  <main className={styles.profile}>
                    <Profile />
                  </main>
                ) : (
                  <Redirect to={{ pathname: "/" }} />
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
