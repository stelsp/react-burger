import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useSelector((store) => store.profile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}
