import { Switch, Route } from "react-router-dom";
import IngredientDetails from "../BurgerIngredients/IngredientDetails/IngredientDetails";
import MainPage from "../../pages/MainPage/MainPage";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import NotFound404 from "../../pages/NotFound404/NotFound404";
import ImageView from "../../pages/ImageView/ImageView";
import Feed from "../../pages/Feed/Feed";
import {
  ProtectedRoute,
  ModalRoute,
} from "../../pages/ProtectedRoute/ProtectedRoute";
import Order from "../../pages/Order/Order";
import { MODAL_TITLE_INGREDIENT } from "../../constants/content";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" children={<MainPage />} />
        <ProtectedRoute path="/profile" children={<Profile />} />
        <Route path="/feed" children={<Feed />} />
        <Route path="/register" children={<Register />} />
        <Route path="/login" children={<Login />} />
        <Route path="/forgot-password" children={<ForgotPassword />} />
        <Route path="/reset-password" children={<ResetPassword />} />
        <ModalRoute path="/feed/:id" modal={<Order />} page={<Order />} />
        <ModalRoute
          path="/ingredients/:id"
          modal={<IngredientDetails />}
          page={<ImageView />}
          title={MODAL_TITLE_INGREDIENT}
        />
        <ModalRoute
          exact
          path="/orders/:id"
          modal={<Order />}
          page={<Order />}
        />

        <Route children={<NotFound404 />} />
      </Switch>
    </>
  );
}

export default Routes;
