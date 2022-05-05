import styles from "./IngredientType.module.css";
import Ingredient from "../components/Ingredient/Ingredient";
import { FC } from "react";

interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
}

interface IIngredientType {
  category: [IIngredient];
  title: string;
}

const IngredientType: FC<IIngredientType> = ({ category, title }) => (
  <>
    <h3 className={styles.cards__title}>{title}</h3>
    <ul className={styles.cards}>
      {category.map((el: IIngredient) => {
        return <Ingredient el={el} key={el._id} />;
      })}
    </ul>
  </>
);

export default IngredientType;
