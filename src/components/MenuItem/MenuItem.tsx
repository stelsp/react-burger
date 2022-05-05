import { FC } from "react";
import { Link } from "react-router-dom";
import { IMenuItem } from "./types";

const MenuItem: FC<IMenuItem> = ({ linkStyle, to, icon, textStyle, text }) => {
  return (
    <Link to={to} className={linkStyle}>
      {icon}
      <span className={textStyle}>{text}</span>
    </Link>
  );
};

export default MenuItem;
