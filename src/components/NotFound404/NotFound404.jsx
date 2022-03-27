import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <div>
        <img alt="page not found" src="" />
        <br />
        <Link to="/">Перейти на главную страницу</Link>
      </div>
    </div>
  );
};

export default NotFound404;
