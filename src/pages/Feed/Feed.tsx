import styles from "./Feed.module.css";
import feed from "./FeedInfo.module.css";
import ProfileOrders from "../../components/ProfileOrders/ProfileOrders";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  wsConnectionClose,
  wsConnectionOpen,
} from "../../services/actions/socketActions";
import { RootState } from "../../services/rootReducer";
import { ICard } from "../../components/ProfileOrders/ProfileOrders";

const FeedInfo = () => {
  const { data } = useSelector((store: RootState) => store.socket);

  const done = data?.orders?.filter((el: ICard) => el.status === "done");
  const pending = data?.orders?.filter((el: ICard) => el.status === "pending");

  return (
    <div className={feed.container}>
      <div className={feed.orders}>
        <div className={feed.done}>
          <h3 className={feed.title}>Готовы:</h3>
          <ul className={feed.list}>
            {done?.map((el: ICard) => (
              <li className={feed.doneItem} key={nanoid()}>
                {el.number}
              </li>
            ))}
          </ul>
        </div>
        <div className={feed.pending}>
          <h3 className={feed.title}>В работе:</h3>
          <ul className={feed.list}>
            {pending?.map((el: ICard) => (
              <li className={feed.pendingItem} key={nanoid()}>
                {el.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={feed.all}>
        <p className={feed.title}>Выполнено за все время:</p>
        <h2 className={feed.number}>{data?.total}</h2>
      </div>
      <div className={feed.today}>
        <p className={feed.title}>Выполнено за сегодня:</p>
        <h2 className={feed.number}>{data?.totalToday}</h2>
      </div>
    </div>
  );
};

function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionOpen());

    return () => {
      dispatch(wsConnectionClose());
    };
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
