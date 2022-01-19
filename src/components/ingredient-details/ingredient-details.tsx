import PropTypes from "prop-types";

import styles from "./ingredient-details.module.css";

import Modal from "../modal/modal";

function IngredientsDetails({ currentIngredient, data, open, close }: any) {
  return (
    <>
      <Modal open={open} close={close}>
        {data
          .filter((el: any) => el._id === currentIngredient)
          .map((el: any) => {
            return (
              <div className={styles.card + " pb-15 pr-10 pl-10"} key={el._id}>
                <h3 className={styles.title + " text text_type_main-large"}>
                  Детали ингредиента
                </h3>
                <img
                  src={el.image}
                  alt={el.name}
                  className={styles.img + " mb-4"}
                />
                <p className="text text_type_main-medium mb-8">{el.name}</p>
                <ul className={styles.container}>
                  <li
                    className={
                      styles.text +
                      " text text_type_main-default text_color_inactive"
                    }
                  >
                    Калории,ккал <span>{el.calories}</span>
                  </li>
                  <li
                    className={
                      styles.text +
                      " text text_type_main-default text_color_inactive"
                    }
                  >
                    Белки, г <span>{el.proteins}</span>
                  </li>
                  <li
                    className={
                      styles.text +
                      " text text_type_main-default text_color_inactive"
                    }
                  >
                    Жиры, г <span>{el.fat}</span>
                  </li>
                  <li
                    className={
                      styles.text +
                      " text text_type_main-default text_color_inactive"
                    }
                  >
                    Углеводы, г <span>{el.carbohydrates}</span>
                  </li>
                </ul>
              </div>
            );
          })}
      </Modal>
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
  currentIngredient: PropTypes.any,
};

export default IngredientsDetails;
