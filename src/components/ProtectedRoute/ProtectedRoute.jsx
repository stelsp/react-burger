import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, path, to }) {
  const { user } = useSelector((store) => store.profile);
  return (
    <Route path={path} exact={true}>
      {user ? children : <Redirect to={{ pathname: to }} />}
    </Route>
  );
}
export default ProtectedRoute;
