import { Route, Redirect } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

export function RouteUserOut({ children, to, ...rest }) {
  const user = getCookie("accessToken");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export function RouteUserIn({ children, to, ...rest }) {
  const user = getCookie("accessToken");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
}
