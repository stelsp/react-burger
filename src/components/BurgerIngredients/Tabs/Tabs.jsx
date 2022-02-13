import styles from "./Tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { useState } from "react";
import { INGREDIENT_CATEGORY } from "../../../constants/content";

function Tabs() {
  const [current, setCurrent] = useState("one");
  return (
    <div className={styles.tab}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        {INGREDIENT_CATEGORY.BUN}
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        {INGREDIENT_CATEGORY.SAUCE}
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        {INGREDIENT_CATEGORY.MAIN}
      </Tab>
    </div>
  );
}

export default Tabs;
