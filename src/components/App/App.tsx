import AppHeader from "../AppHeader/AppHeader";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/ingredientsActions";
import { getCookie } from "../../utils/cookie";
import { userIn } from "../../services/actions/profileActions";
import Routes from "../Routes/Routes";
import { RootState } from "../../services/rootReducer";

export default function App() {
  const dispatch = useDispatch();

  const { ingredientsRequest, ingredientsFailed } = useSelector(
    (store: RootState) => store.ingredients
  );

  useEffect((): any => {
    dispatch(getData());
    if (getCookie("accessToken")) return dispatch(userIn());
  }, [dispatch]);

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
