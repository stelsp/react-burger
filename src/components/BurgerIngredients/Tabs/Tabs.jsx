import styles from "./Tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { useState } from "react";
import { INGREDIENT_CATEGORY } from "../../../constants/content";

function Tabs({ bunRef, souceRef, mainRef }) {
  const [current, setCurrent] = useState("one");
  return (
    <div className={styles.tab}>
      <Tab
        value="one"
        active={current === "one"}
        onClick={(value) => {
          setCurrent(value);
          bunRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.BUN}
      </Tab>
      <Tab
        value="two"
        active={current === "two"}
        onClick={(value) => {
          setCurrent(value);
          souceRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.SAUCE}
      </Tab>
      <Tab
        value="three"
        active={current === "three"}
        onClick={(value) => {
          setCurrent(value);
          mainRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.MAIN}
      </Tab>
    </div>
  );
}

export default Tabs;
