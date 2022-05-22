import { TIngredient } from "../../services/types/data";

export default interface IIngredientTypeProps {
  category: TIngredient[] | undefined;
  title: string;
  ref: any;
}
