import React from "react";

export default function MenuItem({
  linkStyle,
  href,
  icon,
  textStyle,
  text,
}: any) {
  return (
    <a href={href} className={linkStyle}>
      {icon}
      <span className={textStyle}>{text}</span>
    </a>
  );
}
