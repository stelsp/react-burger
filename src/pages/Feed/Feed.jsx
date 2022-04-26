import styles from "./Feed.module.css";
import feed from "./FeedInfo.module.css";
import ProfileOrders from "../../components/ProfileOrders/ProfileOrders";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const FeedInfo = () => {
  return (
    <div className={feed.container}>
      <div className={feed.orders}>
        <div className={feed.done}>
          <h3 className={feed.title}>Готовы:</h3>
          <ul className={feed.list}>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
            <li className={feed.doneItem}>034533</li>
          </ul>
        </div>
        <div className={feed.pending}>
          <h3 className={feed.title}>В работе:</h3>
          <ul className={feed.list}>
            <li className={feed.pendingItem}>034533</li>
            <li className={feed.pendingItem}>034533</li>
            <li className={feed.pendingItem}>034533</li>
            <li className={feed.pendingItem}>034533</li>
          </ul>
        </div>
      </div>
      <div className={feed.all}>
        <p className={feed.title}>Выполнено за все время:</p>
        <h2 className={feed.number}>28 752</h2>
      </div>
      <div className={feed.today}>
        <p className={feed.title}>Выполнено за сегодня:</p>
        <h2 className={feed.number}>138</h2>
      </div>
    </div>
  );
};

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
        <div className={styles.statusContainer}>
          <FeedInfo />
        </div>
      </div>
    </div>
  );
}

export default Feed;
