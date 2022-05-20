import AppHeader from "../AppHeader";
import Loader from "../Loader";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { getData } from "../../services/actions/ingredientsActions";
import { getCookie } from "../../utils/cookie";
import { userIn } from "../../services/actions/profileActions";
import Routes from "../Routes";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const { ingredientsRequest, ingredientsFailed } = useAppSelector(
    (store) => store.ingredients
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
};

export default App;
