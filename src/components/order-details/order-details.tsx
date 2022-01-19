import PropTypes from "prop-types";

import styles from "./order-details.module.css";

import Modal from "../modal/modal";

import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

function OrderDetails({ open, close }: any) {
  return (
    <Modal open={open} close={close}>
      <div className={styles.card + " pt-30 pb-30 pr-25 pl-25"}>
        <h3 className={styles.order + " text text_type_digits-large mb-8"}>
          034536
        </h3>
        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
        <span className={styles.icon + " mb-15"}>
          <CheckMarkIcon type="primary" />
        </span>
        <p className="text text_type_main-default mb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
}

OrderDetails.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default OrderDetails;
