import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function RouteUserOut({ children, to, ...rest }) {
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

export function RouteUserIn({ children, to, ...rest }) {
  const { user } = useSelector((store) => store.profile);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <Redirect to={{ pathname: to, state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
}
