import styles from "./styles.module.css";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../services/hooks";
import {
  getProfileInfo,
  logOutRequest,
} from "../../services/actions/profileActions";
import ProfileForm from "../../components/ProfileForm";
import ProfileOrders from "../../components/ProfileOrders";
import {
  wsConnectionClose,
  wsConnectionUserOpen,
} from "../../services/actions/wsActions";

const ProfileFeed: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsConnectionUserOpen());

    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return (
    <div className={styles.feed}>
      <ProfileOrders />
    </div>
  );
};

function Profile() {
  const dispatch = useAppDispatch();
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
          <Route exact path="/profile/orders" children={<ProfileFeed />} />
        </Switch>
      </div>
    </main>
  );
}

export default Profile;
