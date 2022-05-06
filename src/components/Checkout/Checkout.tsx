import style from "./Checkout.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import { ORDER_BUTTON_TEXT } from "../../constants/content";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderSuccess,
  postOrder,
  resetConstructor,
} from "../../services/actions/constructorActions";
import { useHistory } from "react-router-dom";
import { RootState } from "../../services/rootReducer";
import IIngredient from "../BurgerIngredients/types";

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { order, orderRequest, orderFailed } = useSelector(
    (store: RootState) => store.order
  );
  const { outer, inner } = useSelector(
    (store: RootState) => store.burgerConstructor
  );
  const { isLoggedIn } = useSelector((store: RootState) => store.profile);

  const ingredientsIDs = useMemo(() => {
    return inner ? [...inner.map((el: IIngredient) => el._id), outer._id] : [];
  }, [inner, outer]);

  const ingredientsPrice = useMemo(() => {
    return inner
      ? inner.reduce(
          (sum: number, el: IIngredient) => sum + el.price,
          outer.price * 2
        )
      : 0;
  }, [inner, outer]);

  const openModal = useCallback(() => {
    return isLoggedIn
      ? dispatch(postOrder(ingredientsIDs))
      : history.replace({ pathname: "/login" });
  }, [ingredientsIDs, dispatch, history, isLoggedIn]);

  const closeModal = useCallback(() => {
    dispatch(getOrderSuccess(null));
    dispatch(resetConstructor());
  }, [dispatch]);

  return (
    <>
      <div className={style.checkout}>
        <p className="text text_type_digits-medium">{ingredientsPrice}</p>
        <div className={style.icon}>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={openModal} size="large">
          {ORDER_BUTTON_TEXT}
        </Button>
      </div>
      {orderRequest ? (
        <Loader />
      ) : orderFailed ? (
        <h2>Произошла ошибка при получении данных</h2>
      ) : (
        order && (
          <Modal onClose={closeModal}>
            <OrderDetails />
          </Modal>
        )
      )}
    </>
  );
}

export default Checkout;
