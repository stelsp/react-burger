import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, isUserAuth, to }) {
  return (
    <Route>{isUserAuth ? children : <Redirect to={{ pathname: to }} />}</Route>
  );
}

export default ProtectedRoute;
