import styles from "./Profile.module.css";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getProfileInfo,
  logOutRequest,
} from "../../services/actions/profileActions";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ProfileOrders from "../../components/ProfileOrders/ProfileOrders";
import { ModalRoute } from "../../pages/ProtectedRoute/ProtectedRoute";
import Order from "../Order/Order";

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProfileInfo());
  }, [dispatch]);

  const onLogOut = useCallback(() => {
    dispatch(logOutRequest(history));
  }, [dispatch, history]);

  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/profile" className={styles.link} children="Профиль" />
          <Link
            to="/profile/orders"
            className={styles.link}
            children="История заказов"
          />
          <Link
            to="/login"
            className={styles.link}
            onClick={onLogOut}
            children="Выход"
          />
          <p
            className={styles.text}
            children="В этом разделе вы можете изменить свои персональные данные"
          />
        </div>
        <Switch>
          <Route exact path="/profile" children={<ProfileForm />} />
          <Route exact path="/profile/orders" children={<ProfileOrders />} />
          <ModalRoute
            exact
            path="/orders/:id"
            modal={<Order />}
            page={<Order />}
          />
        </Switch>
      </div>
    </main>
  );
}

export default Profile;
