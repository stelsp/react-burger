import styles from "./Price.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

const Price = ({ price }) => {
  return (
    <div className={styles.sum}>
      <p className={styles.price}>{price}</p>
      <CurrencyIcon />
    </div>
  );
};

export default Price;
