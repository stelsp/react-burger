import styles from "./styles.module.css";
import feed from "./feed.module.css";
import ProfileOrders from "../../components/ProfileOrders";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  wsConnectionClose,
  wsConnectionOpen,
} from "../../services/actions/wsActions";
import { TOrder } from "../../services/types/data";

const FeedInfo: React.FC = () => {
  const { data } = useAppSelector((store) => store.ws);

  const done = data?.orders?.filter((el: TOrder) => el.status === "done");
  const pending = data?.orders?.filter((el: TOrder) => el.status === "pending");

  return (
    <div className={feed.container}>
      <div className={feed.orders}>
        <div className={feed.done}>
          <h3 className={feed.title}>Готовы:</h3>
          <ul className={feed.list}>
            {done?.map((el: TOrder) => (
              <li className={feed.doneItem} key={nanoid()}>
                {el.number}
              </li>
            ))}
          </ul>
        </div>
        <div className={feed.pending}>
          <h3 className={feed.title}>В работе:</h3>
          <ul className={feed.list}>
            {pending?.map((el: TOrder) => (
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
  const dispatch = useAppDispatch();

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
