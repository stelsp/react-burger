import { CSSProperties } from "react";
import Modal from "../modal/modal";

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

function IngredientsDetails({ open, close }: any) {
  return (
    <>
      <Modal open={open} close={close}>
        <div style={CARD_STYLE}>
          <p className="text text_type_digits-large mb-8" style={ORDER_STYLE}>
            ING_DET
          </p>
        </div>
      </Modal>
    </>
  );
}

export default IngredientsDetails;
