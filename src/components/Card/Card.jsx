import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

function Card({ name, image, price, onOpen, id }) {
  return (
    <li className={styles.card} onClick={onOpen} id={id}>
      <Counter count={1} size={"default"} />
      <img src={image} alt={name} className={styles.img} />
      <p className={styles.price}>
        <span className={styles.span}>{price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <h3 className={styles.card__title}>{name}</h3>
    </li>
  );
}

Card.propTypes = {
  onOpen: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
