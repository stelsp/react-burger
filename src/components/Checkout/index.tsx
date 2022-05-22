import style from "./styles.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import OrderDetails from "../OrderDetails";
import Modal from "../Modal";
import Loader from "../Loader";
import { ORDER_BUTTON_TEXT } from "../../constants/content";
import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  getOrderSuccess,
  postOrder,
  resetConstructor,
} from "../../services/actions/constructorActions";
import { useHistory } from "react-router-dom";

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { order, orderRequest, orderFailed } = useAppSelector(
    (store) => store.order
  );
  const { outer, inner } = useAppSelector((store) => store.burgerConstructor);
  const { isLoggedIn } = useAppSelector((store) => store.profile);

  const ingredientsIDs = useMemo(() => {
    if (outer === null) return 0;
    return inner ? [...inner.map((el) => el._id), outer._id] : [];
  }, [inner, outer]);

  const ingredientsPrice = useMemo(() => {
    if (outer === null) return 0;
    return inner
      ? inner.reduce((sum: number, el) => sum + el.price, outer.price * 2)
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
};

export default Checkout;
