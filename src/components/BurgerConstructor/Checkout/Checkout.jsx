import style from "./Checkout.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../../Modal/Modal";
import Loader from "../../Loader/Loader";
import { ORDER_BUTTON_TEXT } from "../../../constants/content";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderSuccess } from "../../../services/actions/actions";
import { fetchOrder } from "../../../utils/api";

function Checkout() {
  const dispatch = useDispatch();
  const { order, orderRequest, orderFailed, outer, inner } = useSelector(
    (store) => ({
      orderRequest: store.order.orderRequest,
      orderFailed: store.order.orderFailed,
      order: store.order.order,
      outer: store.constructo.outer,
      inner: store.constructo.inner,
    })
  );

  const ingredientsIDs = useMemo(() => {
    return inner ? [...inner.map((el) => el._id), outer._id] : [];
  }, [inner, outer]);

  const ingredientsPrice = useMemo(() => {
    return inner
      ? inner.reduce((sum, el) => sum + el.price, outer.price * 2)
      : 0;
  }, [inner, outer]);

  const openModal = useCallback(() => {
    dispatch(fetchOrder(ingredientsIDs));
  }, [ingredientsIDs, dispatch]);

  const closeModal = useCallback(
    () => dispatch(getOrderSuccess(null)),
    [dispatch]
  );

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
            <OrderDetails order={order} />
          </Modal>
        )
      )}
    </>
  );
}

export default Checkout;
