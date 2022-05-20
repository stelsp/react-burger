import styles from "./styles.module.css";
import BurgerIngredients from "../../components/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor";

const MainPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};

export default MainPage;
