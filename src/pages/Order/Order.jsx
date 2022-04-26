import styles from "./Order.module.css";
import Price from "../../components/Price/Price";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useMemo } from "react";

const Ingredient = ({ el }) => {
  const { ingredients } = useSelector((store) => store.ingredients);
  const id = el;
  const ingredient = ingredients?.find((el) => el._id === id);

  if (!ingredient?.image) {
    return null;
  }

  return (
    <li className={styles.container}>
      <div className={styles.name}>
        <div
          style={{
            backgroundImage: `url(${ingredient.image})`,
          }}
          className={styles.img}
        />

        <p className={styles.text}>{ingredient.name}</p>
      </div>
      <div className={styles.price}>
        <p className={styles.text}>1</p>
        <p className={styles.text}>x</p>
        <Price price={ingredient.price} key={nanoid()} />
      </div>
    </li>
  );
};

const Top = ({ number, name, status }) => {
  return (
    <div className={styles.top}>
      <p className={styles.number}>#{number}</p>
      <h2 className={styles.heading}>{name}</h2>
      <p className={styles.status}>{status}</p>
      <h3 className={styles.comp}>Состав:</h3>
    </div>
  );
};

const Middle = ({ el }) => {
  return (
    <ul className={styles.middle}>
      {el?.map((el) => (
        <Ingredient el={el} key={nanoid()} />
      ))}
    </ul>
  );
};

const Bottom = ({ createdAt, el }) => {
  const date = new Date(createdAt).toLocaleString();
  const { ingredients } = useSelector((store) => store.ingredients);
  const sumPrice = useMemo(() => {
    return ingredients
      .filter((i) => el.includes(i._id))
      .map((el) => el.price)
      .reduce((a, b) => a + b, 0);
  }, [ingredients, el]);

  return (
    <div className={styles.bottom}>
      <p className={styles.date}>{date}</p>
      <Price price={sumPrice} />
    </div>
  );
};

export default function Order() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "WS_CONNECTION_START" });
  }, [dispatch]);

  let { id } = useParams();
  const { data } = useSelector((store) => store.socket);
  const el = data?.orders?.find((el) => el._id === id);

  if (!el) return null;

  return (
    <div className={styles.order}>
      <Top number={el.number} name={el.name} status={el.status} />
      <Middle el={el.ingredients} />
      <Bottom createdAt={el.createdAt} el={el.ingredients} />
    </div>
  );
}
