import styles from "./ProfileOrders.module.css";
import Price from "../Price/Price";
import { useMemo } from "react";
import { getCookie } from "../../utils/cookie";

const token = getCookie("accessToken")?.split("Bearer")[1];
const ws = new WebSocket(
  `wss://norma.nomoreparties.space/orders/all?token=${token}`
);
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
  return data;
};

const Top = () => {
  return (
    <>
      {ws.onmessage.orders.map((el) => {
        return (
          <div>
            <div className={styles.numberContainer}>
              <p className={styles.number}>{el.number}</p>
              <p className={styles.time}>{el.createdAt}</p>
            </div>
            <h2 className={styles.heading}>{el.name}</h2>
            <p className={styles.status}>{el.status}</p>
          </div>
        );
      })}
    </>
  );
};

const Bottom = () => {
  // const sumPrice = useMemo(() => {
  //   return data.ing ? data.ing.reduce((sum, el) => sum + el.price, 0) : 0;
  // }, []);
  return (
    <div className={styles.ingContainer}>
      <div className={styles.imageContainer}>
        {ws.onmessage.orders.map((el) => (
          <div
            key={el.ingredients}
            styles={{ width: "56px", height: "56px", backgroundColor: "white" }}
          />
        ))}
      </div>
      <Price price={100} />
    </div>
  );
};

function Card() {
  return (
    <div className={styles.card}>
      <Top />
      <Bottom />
    </div>
  );
}

export default function ProfileOrders() {
  return (
    <div className={styles.feed}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
