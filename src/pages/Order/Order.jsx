import styles from "./Order.module.css";
import Price from "../../components/Price/Price";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const Ingredient = ({ el }) => {
  const { ingredients } = useSelector((store) => store.ingredients);
  const id = el;
  const ingredient = ingredients?.find((el) => el._id == id);

  return (
    <li className={styles.container}>
      <div className={styles.name}>
        <img alt="#" src="" className={styles.img} />

        <p className={styles.text}>{ingredient.name}</p>
      </div>
      <div className={styles.price}>
        <p className={styles.text}>2</p>
        <p className={styles.text}>x</p>
        <Price price={120} />
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

const Bottom = ({ createdAt }) => {
  const date = new Date(createdAt).toLocaleString();

  return (
    <div className={styles.bottom}>
      <p className={styles.date}>{date}</p>
      <Price price={1250} />
    </div>
  );
};

export default function Order() {
  let { id } = useParams();
  const { data } = useSelector((store) => store.socket);
  const el = data.orders.find((el) => el._id === id);

  if (!el) return null;

  return (
    <div className={styles.order}>
      <Top number={el.number} name={el.name} status={el.status} />
      <Middle el={el.ingredients} />
      <Bottom createdAt={el.createdAt} />
    </div>
  );
}
