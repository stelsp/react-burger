import styles from "./styles.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { MODAL_TEXT_ORDER } from "../../constants/content";
import { useAppSelector } from "../../services/hooks";

const OrderDetails: React.FC = () => {
  const { order } = useAppSelector((store) => store.order);

  return (
    <div className={styles.card}>
      <h3 className={styles.order}>{order?.order.number}</h3>
      <p className={styles.text__identifier}>{order?.name}</p>
      <span className={styles.icon}>
        <CheckMarkIcon type="primary" />
      </span>
      <p className={styles.text__start}>{MODAL_TEXT_ORDER.START}</p>
      <p className={styles.text__wait}>{MODAL_TEXT_ORDER.WAIT}</p>
    </div>
  );
};

export default OrderDetails;
