import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import MainPage from "../../pages/MainPage/MainPage";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Loader from "../Loader/Loader";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import NotFound404 from "../../pages/NotFound404/NotFound404";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../utils/api";
import {
  RouteTest,
  RouteUserIn,
  RouteUserOut,
} from "../../pages/ProtectedRoute/ProtectedRoute";
import ImageView from "../../pages/ImageView/ImageView";

import IngredientDetails from "../BurgerIngredients/IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { MODAL_TITLE_INGREDIENT } from "../../constants/content";

export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;

  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  const closeModal = useCallback(
    (e) => {
      e.stopPropagation();
      history.goBack();
    },
    [history]
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      {ingredientsRequest ? (
        <Loader />
      ) : ingredientsFailed ? (
        <h1>Произошла ошибка при получении данных</h1>
      ) : (
        <>
          <AppHeader />
          <Switch location={background || location}>
            <Route exact path="/" children={<MainPage />} />
            <RouteUserOut path="/profile" children={<Profile />} />
            <RouteUserIn path="/register" children={<Register />} />
            <RouteUserIn path="/login" children={<Login />} />
            <RouteTest path="/forgot-password" children={<ForgotPassword />} />
            <Route path="/reset-password" children={<ResetPassword />} />
            <Route exact path="/ingredients/:id" children={<ImageView />} />
            <Route children={<NotFound404 />} />
          </Switch>
          {background && (
            <Route
              path="/ingredients/:id"
              children={
                <Modal onClose={closeModal} title={MODAL_TITLE_INGREDIENT}>
                  <IngredientDetails />
                </Modal>
              }
            />
          )}
        </>
      )}
    </>
  );
}
