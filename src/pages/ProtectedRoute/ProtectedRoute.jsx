import { Route, Redirect, useLocation } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

export function RouteUserOut({ children, ...rest }) {
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

export function RouteUserIn({ children, ...rest }) {
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

export function RouteTest({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        location.pathname === "forgot-password" ? (
          <Redirect
            to={{ pathname: "/reset-password", state: { from: location } }}
          />
        ) : (
          children
        )
      }
    />
  );
}
