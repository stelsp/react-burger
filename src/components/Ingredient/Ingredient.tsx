import styles from "./Ingredient.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { useMemo, useCallback, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { setCurrentIngredient } from "../../services/actions/ingredientsActions";
import { Link, useLocation } from "react-router-dom";
import IIngredient from "../BurgerIngredients/types";
import { RootState } from "../../services/rootReducer";

interface Iel {
  el: IIngredient;
}

const Ingredient: FC<Iel> = ({ el }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { outer, inner } = useSelector(
    (store: RootState) => store.burgerConstructor
  );

  const count = useMemo(() => {
    return el.type === "bun" && el._id === outer._id
      ? 2
      : inner.filter((item: IIngredient) => item._id === el._id).length;
  }, [inner, outer, el]);

  const openModal = useCallback(() => {
    dispatch(setCurrentIngredient(el));
  }, [dispatch, el]);

  const [, drag] = useDrag(() => ({
    type: "ingredient",
    item: el,
  }));

  return (
    <Link
      className={styles.link}
      key={el._id}
      to={{
        pathname: `/ingredients/${el._id}`,
        state: { background: location },
      }}
    >
      <div onClick={openModal} className={styles.card} ref={drag}>
        {count > 0 && <Counter count={count} size={"default"} />}
        <img src={el.image} alt={el.name} className={styles.img} />
        <p className={styles.price}>
          <span className={styles.span}>{el.price}</span>
          <CurrencyIcon type="primary" />
        </p>
        <h3 className={styles.card__title}>{el.name}</h3>
      </div>
    </Link>
  );
};

export default Ingredient;
