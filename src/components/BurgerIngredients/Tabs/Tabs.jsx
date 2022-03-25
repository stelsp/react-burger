import styles from "./Tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { INGREDIENT_CATEGORY } from "../../../constants/content";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../../../services/actions/actions";

function Tabs({ bunRef, souceRef, mainRef }) {
  const dispatch = useDispatch();
  const { current } = useSelector((store) => store.ingredients);
  return (
    <div className={styles.tab}>
      <Tab
        value="one"
        active={current === "one"}
        onClick={(value) => {
          dispatch(setCurrentTab(value));
          bunRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.BUN}
      </Tab>
      <Tab
        value="two"
        active={current === "two"}
        onClick={(value) => {
          dispatch(setCurrentTab(value));
          souceRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.SAUCE}
      </Tab>
      <Tab
        value="three"
        active={current === "three"}
        onClick={(value) => {
          dispatch(setCurrentTab(value));
          mainRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.MAIN}
      </Tab>
    </div>
  );
}

export default Tabs;
