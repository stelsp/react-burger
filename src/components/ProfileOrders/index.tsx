import styles from "./styles.module.css";
import Price from "../Price";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../services/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { IBottomProps, ICardProps, IImgProps, ITopProps } from "./types";

const Top: React.FC<ITopProps> = ({ createdAt, number, status, name }) => {
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

const Img: React.FC<IImgProps> = ({ id }) => {
  const { ingredients } = useAppSelector((store) => store.ingredients);
  const ingredient = ingredients?.find((el) => el._id === id);

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

const Bottom: React.FC<IBottomProps> = ({ ing }) => {
  const { ingredients } = useAppSelector((store) => store.ingredients);

  const sumPrice = useMemo(() => {
    return ingredients
      ?.filter((i) => ing.includes(i._id))
      .map((el) => el.price)
      .reduce((a, b) => a + b, 0);
  }, [ingredients, ing]);

  return (
    <div className={styles.ingContainer}>
      <div className={styles.imageContainer}>
        {ing?.slice(0, 6).map((id) => (
          <Img id={id} key={nanoid()} />
        ))}
      </div>
      <Price price={sumPrice} />
    </div>
  );
};

const Card: React.FC<ICardProps> = ({
  createdAt,
  number,
  status,
  name,
  _id,
  ing,
}) => {
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
  const { data } = useAppSelector((store) => store.ws);

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
