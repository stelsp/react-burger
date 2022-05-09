import styles from "./ProfileOrders.module.css";
import Price from "../Price/Price";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useMemo, FC } from "react";
import IIngredient from "../BurgerIngredients/types";
import { RootState } from "../../services/rootReducer";

export interface ICard {
  createdAt?: any;
  number?: number;
  status?: string;
  name?: string;
  _id?: string;
  ing?: [string];
  ingredients?: [string];
  el?: IIngredient;
}

const Top: FC<ICard> = ({ createdAt, number, status, name }) => {
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

const Img: FC<ICard> = ({ el }) => {
  const { ingredients } = useSelector((store: RootState) => store.ingredients);
  const id = el;
  const ingredient = ingredients?.find((el: any) => el._id === id);

  if (!ingredient?.image) {
    return null;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${ingredient.image})`,
      }}
      className={styles.img}
    />
  );
};

const Bottom: FC<ICard> = ({ ing }) => {
  const { ingredients } = useSelector((store: RootState) => store.ingredients);

  const sumPrice = useMemo(() => {
    return ingredients
      .filter((i: IIngredient) => ing?.includes(i._id))
      .map((el: IIngredient) => el.price)
      .reduce((a: number, b: number) => a + b, 0);
  }, [ingredients, ing]);

  return (
    <div className={styles.ingContainer}>
      <div className={styles.imageContainer}>
        {ing?.slice(0, 6).map((el: any) => (
          <Img el={el} key={nanoid()} />
        ))}
      </div>
      <Price price={sumPrice} />
    </div>
  );
};

const Card: FC<ICard> = ({ createdAt, number, status, name, _id, ing }) => {
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
};

export default function ProfileOrders() {
  const { data } = useSelector((store: RootState) => store.socket);

  return (
    <>
      {data?.orders?.map((el: ICard) => {
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
