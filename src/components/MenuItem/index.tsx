import { Link } from "react-router-dom";
import IMenuItemProps from "./types";

const MenuItem: React.FC<IMenuItemProps> = ({
  linkStyle,
  to,
  icon,
  textStyle,
  text,
}) => {
  return (
    <Link to={to} className={linkStyle}>
      {icon}
      <span className={textStyle}>{text}</span>
    </Link>
  );
};

export default MenuItem;
