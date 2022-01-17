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
  linkStyle: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.object,
  textStyle: string,
  text: string,
};

export default MenuItem;
