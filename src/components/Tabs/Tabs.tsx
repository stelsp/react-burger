import styles from "./Tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { INGREDIENT_CATEGORY } from "../../constants/content";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../../services/actions/ingredientsActions";
import { RootState } from "../../services/rootReducer";
import { FC } from "react";

interface ITabs {
  bunRef: any;
  sauceRef: any;
  mainRef: any;
}

const Tabs: FC<ITabs> = ({ bunRef, sauceRef, mainRef }) => {
  const dispatch = useDispatch();
  const { currentTab } = useSelector((store: RootState) => store.ingredients);

  return (
    <div className={styles.tab}>
      <Tab
        value="bun"
        active={currentTab === "bun"}
        onClick={(value) => {
          dispatch(setCurrentTab(value));
          bunRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.BUN}
      </Tab>
      <Tab
        value="sauce"
        active={currentTab === "sauce"}
        onClick={(value) => {
          dispatch(setCurrentTab(value));
          sauceRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.SAUCE}
      </Tab>
      <Tab
        value="main"
        active={currentTab === "main"}
        onClick={(value) => {
          dispatch(setCurrentTab(value));
          mainRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {INGREDIENT_CATEGORY.MAIN}
      </Tab>
    </div>
  );
};

export default Tabs;
