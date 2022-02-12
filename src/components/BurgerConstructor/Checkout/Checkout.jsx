import style from "./Checkout.module.css";
import PropTypes from "prop-types";
import axios from "axios";
import { useCallback, useState } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../../Modal/Modal";
import { ORDER_BUTTON_TEXT } from "../../../constants/content";
import { API_URL, URL_KEY_ORDERS } from "../../../constants/api-url";
import Loader from "../../Loader/Loader";

function Checkout({ ingredientsIDs, ingredientsPrice }) {
  const [order, setOrder] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = useCallback(() => {
    setLoading(true);
    axios
      .post(`${API_URL}${URL_KEY_ORDERS}`, {
        ingredients: ingredientsIDs,
      })
      .then(({ data }) => {
        setOrder(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [ingredientsIDs]);

  const closeModal = useCallback(() => setOrder(false), []);

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
