import { Switch, Route } from "react-router-dom";
import IngredientDetails from "../IngredientDetails";
import MainPage from "../../pages/MainPage";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile";
import NotFound404 from "../../pages/NotFound404/NotFound404";
import ImageView from "../../pages/ImageView";
import Feed from "../../pages/Feed";
import { ProtectedRoute, ModalRoute } from "../../pages/ProtectedRoute";
import Order from "../../pages/Order";
import { MODAL_TITLE_INGREDIENT } from "../../constants/content";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/react-burger" children={<MainPage />} />
        <ProtectedRoute path="/profile" children={<Profile />} />
        <Route path="/feed" children={<Feed />} />
        <Route path="/register" children={<Register />} />
        <Route path="/login" children={<Login />} />
        <Route path="/forgot-password" children={<ForgotPassword />} />
        <Route path="/reset-password" children={<ResetPassword />} />
        <ModalRoute path="/feed/:id" modal={<Order />} page={<Order />} />
        <ModalRoute
          title={MODAL_TITLE_INGREDIENT}
          path="/ingredients/:id"
          modal={<IngredientDetails />}
          page={<ImageView />}
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
};

export default Routes;
