import React from "react";
import PropTypes, { string } from "prop-types";

function MenuItem({ linkStyle, href, icon, textStyle, text }: any) {
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
  textStyle: string.isRequired,
  text: string.isRequired,
};

export default MenuItem;
