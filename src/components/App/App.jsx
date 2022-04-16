import AppHeader from "../AppHeader/AppHeader";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/ingredientsActions";
import { getCookie } from "../../utils/cookie";
import { userIn } from "../../services/actions/profileActions";
import Routes from "../Routes/Routes";

export default function App() {
  const dispatch = useDispatch();

  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  );
  console.log(getCookie("accessToken"));

  useEffect(() => {
    dispatch(getData());
    if (getCookie("accessToken")) return dispatch(userIn());
  }, [dispatch]);

  const ws = new WebSocket(
    `wss://norma.nomoreparties.space/orders/all?token=${getCookie(
      "accessToken"
    )}`
  );

  console.log(ws);

  return (
    <>
      {ingredientsRequest ? (
        <Loader />
      ) : ingredientsFailed ? (
        <h1>Произошла ошибка при получении данных</h1>
      ) : (
        <>
          <AppHeader />
          <Routes />
        </>
      )}
    </>
  );
}
