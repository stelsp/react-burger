import styles from "./Tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { useState } from "react";
import { INGREDIENT_TYPE } from "../../../constants/constants";

function Tabs() {
  const [current, setCurrent] = useState("one");
  return (
    <div className={styles.tab}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        {INGREDIENT_TYPE.BUN}
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        {INGREDIENT_TYPE.SAUCE}
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        {INGREDIENT_TYPE.MAIN}
      </Tab>
    </div>
  );
}

export default Tabs;
