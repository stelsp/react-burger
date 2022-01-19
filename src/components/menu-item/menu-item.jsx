import PropTypes from "prop-types";

function MenuItem({ linkStyle, href, icon, textStyle, text }) {
  return (
    <a href={href} className={linkStyle}>
      {icon}
      <span className={textStyle}>{text}</span>
    </a>
  );
}

MenuItem.propTypes = {
  linkStyle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  textStyle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
