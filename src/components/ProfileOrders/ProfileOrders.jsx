import styles from "./ProfileOrders.module.css";
import Price from "../Price/Price";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

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

const Img = ({ el }) => {
  const { ingredients } = useSelector((store) => store.ingredients);
  const id = el;

  const ingredient = ingredients?.find((el) => el._id === id);
  console.log(ingredient);

  return (
    <img
      alt="#"
      src="https://code.s3.yandex.net/react/code/sauce-02.png"
      className={styles.img}
    />
  );
};

const Bottom = ({ ing }) => {
  return (
    <div className={styles.ingContainer}>
      <div className={styles.imageContainer}>
        {ing?.slice(0, 6).map((el, index) => (
          <Img el={el} key={nanoid()} />
        ))}
      </div>
      <Price price={640} />
    </div>
  );
};

function Card({ createdAt, number, status, name, _id, ing }) {
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
        <Bottom ing={ing} />
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
            ing={el.ingredients}
          />
        );
      })}
    </>
  );
}
