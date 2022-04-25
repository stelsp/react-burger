import styles from "./ProfileOrders.module.css";
import Price from "../Price/Price";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const Top = ({ createdAt, number, status, name }) => {
  const date = new Date(createdAt).toLocaleString();
  return (
    <div>
      <div className={styles.numberContainer}>
        <p className={styles.number}>#{number}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <h2 className={styles.heading}>{name}</h2>
      <p className={styles.status}>{status}</p>
    </div>
  );
};

const Bottom = ({ ingredients }) => {
  return (
    <div className={styles.ingContainer}>
      <div className={styles.imageContainer}>
        {ingredients?.slice(0, 6).map((el, index) => (
          <div className={styles.div} key={nanoid()} />
        ))}
      </div>
      <Price price={640} />
    </div>
  );
};

function Card({ createdAt, number, status, name, _id, ingredients }) {
  const location = useLocation();
  return (
    <Link
      className={styles.link}
      to={{
        pathname: `/orders/${_id}`,
        state: { background: location },
      }}
    >
      <div className={styles.card}>
        <Top
          createdAt={createdAt}
          number={number}
          status={status}
          name={name}
        />
        <Bottom ingredients={ingredients} />
      </div>
    </Link>
  );
}

export default function ProfileOrders() {
  const { data } = useSelector((store) => store.socket);

  return (
    <>
      {data?.orders?.map((el) => {
        return (
          <Card
            createdAt={el.createdAt}
            number={el.number}
            status={el.status}
            name={el.name}
            _id={el._id}
            key={el._id}
            ingredients={el.ingredients}
          />
        );
      })}
    </>
  );
}
