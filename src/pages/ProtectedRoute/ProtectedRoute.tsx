import { useCallback, FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useHistory } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { RootState } from "../../services/rootReducer";

interface IProtectedRoute {
  children: ReactNode;
  path: string;
}

interface IModalRoute {
  modal: ReactNode;
  page: ReactNode;
  title?: string;
  path: string;
  exact?: boolean;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children, ...rest }) => {
  const { isLoggedIn } = useSelector((store: RootState) => store.profile);
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

export const ModalRoute: FC<IModalRoute> = ({
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
