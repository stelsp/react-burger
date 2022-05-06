import styles from "./Price.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { FC } from "react";

interface IPrice {
  price: number;
}

const Price: FC<IPrice> = ({ price }) => {
  return (
    <div className={styles.sum}>
      <p className={styles.price}>{price}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};

export default Price;
