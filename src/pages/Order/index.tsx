import styles from "./styles.module.css";
import Price from "../../components/Price";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useMemo } from "react";
import {
  IBottomProps,
  IIngredientProps,
  IMiddleProps,
  ITopProps,
} from "./types";
import {
  wsConnectionClose,
  wsConnectionOpen,
} from "../../services/actions/wsActions";

const Ingredient: React.FC<IIngredientProps> = ({ id }) => {
  const { ingredients } = useAppSelector((store) => store.ingredients);
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

const Top: React.FC<ITopProps> = ({ number, name, status }) => {
  return (
    <div className={styles.top}>
      <p className={styles.number}>#{number}</p>
      <h2 className={styles.heading}>{name}</h2>
      <p className={styles.status}>{status}</p>
      <h3 className={styles.comp}>Состав:</h3>
    </div>
  );
};

const Middle: React.FC<IMiddleProps> = ({ ing }) => {
  return (
    <ul className={styles.middle}>
      {ing?.map((id) => (
        <Ingredient id={id} key={nanoid()} />
      ))}
    </ul>
  );
};

const Bottom: React.FC<IBottomProps> = ({ createdAt, ing }) => {
  const date = new Date(createdAt).toLocaleString();
  const { ingredients } = useAppSelector((store) => store.ingredients);
  const sumPrice = useMemo(() => {
    return ingredients
      ?.filter((i) => ing.includes(i._id))
      .map((el) => el.price)
      .reduce((a, b) => a + b, 0);
  }, [ingredients, ing]);

  return (
    <div className={styles.bottom}>
      <p className={styles.date}>{date}</p>
      <Price price={sumPrice} />
    </div>
  );
};

const Order: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsConnectionOpen());

    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  let { id }: { id: string } = useParams();
  const { data } = useAppSelector((store) => store.ws);
  const el = data?.orders?.find((el) => el._id === id);

  if (!el) return null;

  return (
    <div className={styles.order}>
      <Top number={el.number} name={el.name} status={el.status} />
      <Middle ing={el.ingredients} />
      <Bottom createdAt={el.createdAt} ing={el.ingredients} />
    </div>
  );
};

export default Order;
