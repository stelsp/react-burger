import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, to, ...rest }) {
  const { user } = useSelector((store) => store.profile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: to, state: { from: location } }} />
        )
      }
    />
  );
}
export default ProtectedRoute;
