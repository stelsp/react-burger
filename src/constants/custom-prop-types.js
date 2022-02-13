import PropTypes from "prop-types";

export const ingredientPropTypes = PropTypes.shape({
  calories: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  image: PropTypes.string,
  image_large: PropTypes.string,
  image_mobile: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  proteins: PropTypes.number,
  _id: PropTypes.string,
  type: PropTypes.string,
});

export const orderPropTypes = PropTypes.shape({
  name: PropTypes.string,
  order: PropTypes.objectOf(PropTypes.number),
});
