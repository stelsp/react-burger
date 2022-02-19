import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import DataProvider from "../../services/DataProvider";

import store from "../../services/store";
import { add, remove, resolve } from "../../services/actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(add("test1"));
store.dispatch(resolve(1));
store.dispatch(remove(1));
unsubscribe();

export default function App() {
  return (
    <DataProvider>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DataProvider>
  );
}
