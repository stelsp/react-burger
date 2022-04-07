import styles from "./MainPage.module.css";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

function MainPage() {
  return (
    <main className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
}

export default MainPage;
