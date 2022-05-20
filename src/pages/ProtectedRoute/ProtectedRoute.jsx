import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useHistory } from "react-router-dom";
import Modal from "../../components/Modal";

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

export function ModalRoute({ modal, page, title, ...rest }) {
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
}
