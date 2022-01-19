import { CSSProperties } from "react";
import Modal from "../modal/modal";

import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

const CARD_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const ORDER_STYLE: CSSProperties = {
  textShadow:
    "0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)",
};

const ICON_STYLE: CSSProperties = {
  transform: "scale(3)",
};

function OrderDetails({ open, close }: any) {
  return (
    <Modal open={open} close={close}>
      <div style={CARD_STYLE}>
        <p className="text text_type_digits-large mb-8" style={ORDER_STYLE}>
          034536
        </p>
        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
        <span className="mb-15" style={ICON_STYLE}>
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

export default OrderDetails;
