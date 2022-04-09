import styles from "./Tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { INGREDIENT_CATEGORY } from "../../../constants/content";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTab } from "../../../services/actions/ingredientsActions";

function Tabs({ bunRef, sauceRef, mainRef }) {
  const dispatch = useDispatch();
  const { currentTab } = useSelector((store) => store.ingredients);

  // const setTab = (tab) => {
  //   const element = document.getElementById(tab)
  //   if (element) element.scrollIntoView({ behavior: 'smooth' })
  // }
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
}

export default Tabs;
