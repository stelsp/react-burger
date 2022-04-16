import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { MODAL_TITLE_INGREDIENT } from "../../constants/content";

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

export function ModalRoute({ modal, page, ...rest }) {
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
            <Modal onClose={closeModal} title={MODAL_TITLE_INGREDIENT}>
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
