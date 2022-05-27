import { useCallback } from "react";
import { useAppSelector } from "../../services/hooks";
import { Route, Redirect, useHistory, RouteProps } from "react-router-dom";
import Modal from "../../components/Modal";
import { IModalRouteProps } from "./types";

export const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isLoggedIn } = useAppSelector((store) => store.profile);
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
};

export const ModalRoute: React.FC<IModalRouteProps> = ({
  modal,
  page,
  title,
  ...rest
}) => {
  const history = useHistory();

  const closeModal = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <>
      <Route
        {...rest}
        render={() =>
          history.action === "PUSH" ? (
            <Modal onClose={closeModal} title={title}>
              {modal}
            </Modal>
          ) : (
            <>{page}</>
          )
        }
      />
    </>
  );
};
