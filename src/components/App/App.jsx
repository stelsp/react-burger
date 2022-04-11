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
import { ProtectedRoute } from "../../pages/ProtectedRoute/ProtectedRoute";
import ImageView from "../../pages/ImageView/ImageView";

import IngredientDetails from "../BurgerIngredients/IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { MODAL_TITLE_INGREDIENT } from "../../constants/content";
import { getCookie } from "../../utils/cookie";
import { userIn } from "../../services/actions/profileActions";

export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;

  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );

  const closeModal = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    dispatch(getData());
    if (getCookie("accessToken")) return dispatch(userIn());
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
            <ProtectedRoute path="/profile" children={<Profile />} />
            <Route path="/register" children={<Register />} />
            <Route path="/login" children={<Login />} />
            <Route path="/forgot-password" children={<ForgotPassword />} />
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
