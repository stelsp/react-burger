import styles from "./OrderDetails.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

function OrderDetails({ order }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.order}>{order.order.number}</h3>
      <p className={styles.text__identifier}>{order.name}</p>
      <span className={styles.icon}>
        <CheckMarkIcon type="primary" />
      </span>
      <p className={styles.text__start}>Ваш заказ начали готовить</p>
      <p className={styles.text__wait}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
