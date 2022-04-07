import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../../pages/MainPage/MainPage";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Loader from "../Loader/Loader";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import NotFound404 from "../../pages/NotFound404/NotFound404";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../utils/api";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  RouteUserIn,
  RouteUserOut,
} from "../../pages/ProtectedRoute/ProtectedRoute";
import ImageView from "../../pages/ImageView/ImageView";

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
              <Route exact path="/" children={<MainPage />} />
              <RouteUserOut exact path="/profile" children={<Profile />} />
              <RouteUserIn exact path="/register" children={<Register />} />
              <RouteUserIn exact path="/login" children={<Login />} />
              <RouteUserIn
                exact
                path="/forgot-password"
                children={<ForgotPassword />}
              />
              <RouteUserIn
                exact
                path="/reset-password"
                children={<ResetPassword />}
              />
              <Route exact path="/ingredients/:id" children={<ImageView />} />
              <Route children={<NotFound404 />} />
            </Switch>
          </>
        )}
      </DndProvider>
    </Router>
  );
}
