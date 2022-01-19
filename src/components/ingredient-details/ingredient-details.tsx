import { CSSProperties } from "react";
import PropTypes from "prop-types";

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
  minWidth: "580px",
  marginTop: "50px",
};

const CONTAINER_STYLE: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const TEXT_STYLE = "text text_type_main-default text_color_inactive";

function IngredientsDetails({ data, open, close }: any) {
  return (
    <>
      {data
        .filter((el: any) => el._id === "60d3b41abdacab0026a733c6")
        .map((el: any) => {
          <Modal open={open} close={close}>
            <div style={CARD_STYLE} className=" pb-15 pr-10 pl-10">
              <h3 className="text text_type_main-large" style={ORDER_STYLE}>
                Детали ингредиента
              </h3>
              <img src={el.image} alt={el.name} className="mb-4" />
              <p className="mb-4">{el.name}</p>
              <ul style={CONTAINER_STYLE}>
                <li className={TEXT_STYLE}>{el.calories}</li>
                <li className={TEXT_STYLE}>{el.proteins}</li>
                <li className={TEXT_STYLE}>{el.fat}</li>
                <li className={TEXT_STYLE}>{el.carbohydrates}</li>
              </ul>
            </div>
          </Modal>;
        })}
    </>
  );
}

IngredientsDetails.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  // image: PropTypes.any,
  // name: PropTypes.any,
  // calories: PropTypes.any,
  // proteins: PropTypes.any,
  // fat: PropTypes.any,
  // carbohydrates: PropTypes.any,
  data: PropTypes.any,
};

export default IngredientsDetails;
