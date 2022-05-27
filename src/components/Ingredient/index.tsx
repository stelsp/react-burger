import styles from "./styles.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { useMemo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { useDrag } from "react-dnd";
import { setCurrentIngredient } from "../../services/actions/ingredientsActions";
import { Link, useLocation } from "react-router-dom";
import IIngredientProps from "./types";
import { TIngredient } from "../../services/types/data";

const Ingredient: React.FC<IIngredientProps> = ({ el }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { outer, inner } = useAppSelector((store) => store.burgerConstructor);

  const count = useMemo(() => {
    if (outer === null) return 0;
    return el.type === "bun" && el._id === outer._id
      ? 2
      : inner.filter((item: TIngredient) => item._id === el._id).length;
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
