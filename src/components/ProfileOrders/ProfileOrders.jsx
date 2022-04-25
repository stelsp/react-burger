import styles from "./ProfileOrders.module.css";
import Price from "../Price/Price";
import { Link, useLocation } from "react-router-dom";

const Top = () => {
  return (
    <div>
      <div className={styles.numberContainer}>
        <p className={styles.number}>#034533</p>
        <p className={styles.date}>Вчера, 13:50 i-GMT+3</p>
      </div>
      <h2 className={styles.heading}>Black Hole Singularity острый бургер</h2>
      <p className={styles.status}>Выполнен</p>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className={styles.ingContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.div1} />
        <div className={styles.div2} />
        <div className={styles.div3} />
        <div className={styles.div4} />
        <div className={styles.div5} />
        <div className={styles.div6} />
      </div>
      <Price price={640} />
    </div>
  );
};

function Card() {
  const location = useLocation();
  return (
    <Link
      className={styles.link}
      to={{
        pathname: "/orders/:id",
        // `/orders/:id/${el._id}`,
        state: { background: location },
      }}
    >
      <div className={styles.card}>
        <Top />
        <Bottom />
      </div>
    </Link>
  );
}

export default function ProfileOrders() {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}
