import styles from "./Feed.module.css";
import ProfileOrders from "../../components/ProfileOrders/ProfileOrders";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "WS_CONNECTION_START" });
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Лента заказов</h2>
        <div className={styles.feed}>
          <ProfileOrders />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.statusContainer}>Feed</div>
      </div>
    </div>
  );
}

export default Feed;
