import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <main>
      <div>
        <img alt="page not found" src="" />
        <br />
        <Link to="/">Перейти на главную страницу</Link>
      </div>
    </main>
  );
};

export default NotFound404;
