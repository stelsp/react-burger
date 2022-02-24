import style from "./Checkout.module.css";
import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../../Modal/Modal";
import Loader from "../../Loader/Loader";
import { ORDER_BUTTON_TEXT } from "../../../constants/content";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../../services/actions/actions";
import { fetchOrder } from "../../../utils/api";

function Checkout({ ingredientsIDs, ingredientsPrice }) {
  const dispatch = useDispatch();
  const { order, loading } = useSelector((store) => ({
    loading: store.orderReducer.loading,
    order: store.orderReducer.order,
  }));

  const openModal = useCallback(() => {
    dispatch(fetchOrder(ingredientsIDs));
  }, [ingredientsIDs, dispatch]);

  const closeModal = useCallback(() => dispatch(getOrder(null)), [dispatch]);

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
      {loading ? (
        <Loader />
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

Checkout.propTypes = {
  ingredientsIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredientsPrice: PropTypes.number.isRequired,
};

export default Checkout;
