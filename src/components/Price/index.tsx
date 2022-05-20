import styles from "./styles.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import IPriceProps from "./types";

const Price: React.FC<IPriceProps> = ({ price }) => {
  return (
    <div className={styles.sum}>
      <p className={styles.price}>{price}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};

export default Price;
