import styles from "./styles.module.css";
import Ingredient from "../Ingredient";
import { forwardRef } from "react";
import { TIngredient } from "../../services/types/data";

interface IIngredientTypeProps {
  category: TIngredient[] | undefined;
  title: string;
  ref: any;
}

const IngredientType: React.FC<IIngredientTypeProps> = forwardRef(
  ({ category, title }, ref: any) => (
    <li ref={ref}>
      <h3 className={styles.cards__title}>{title}</h3>
      <ul className={styles.cards}>
        {category?.map((el) => {
          return <Ingredient el={el} key={el._id} />;
        })}
      </ul>
    </li>
  )
);

export default IngredientType;
