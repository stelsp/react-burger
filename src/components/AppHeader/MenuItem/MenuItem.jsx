import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MenuItem({ linkStyle, to, icon, textStyle, text }) {
  return (
    <Link to={to} className={linkStyle}>
      {icon}
      <span className={textStyle}>{text}</span>
    </Link>
  );
}

MenuItem.propTypes = {
  linkStyle: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  textStyle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
