import styles from "./Order.module.css";
import Price from "../../components/Price/Price";

const Ingredient = () => {
  return (
    <li className={styles.container}>
      <div className={styles.name}>
        <div className={styles.div1} />
        <p className={styles.text}>Флюоресцентная булка R2-D3</p>
      </div>
      <div className={styles.price}>
        <p className={styles.text}>2</p>
        <p className={styles.text}>x</p>
        <Price price={120} />
      </div>
    </li>
  );
};

const Top = () => {
  return (
    <div className={styles.top}>
      <p className={styles.number}>#034533</p>
      <h2 className={styles.heading}>Black Hole Singularity острый бургер</h2>
      <p className={styles.status}>Выполнен</p>
      <h3 className={styles.comp}>Состав:</h3>
    </div>
  );
};

const Middle = () => {
  return (
    <ul className={styles.middle}>
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
    </ul>
  );
};

const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <p className={styles.date}>Вчера, 13:50 i-GMT+3</p>
      <Price price={1250} />
    </div>
  );
};

export default function Order() {
  return (
    <div className={styles.order}>
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}
