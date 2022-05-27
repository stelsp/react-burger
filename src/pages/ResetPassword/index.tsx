import styles from "./styles.module.css";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import Loader from "../../components/Loader";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
  postResetPasswordRequest,
  setResetPasswordFormValue,
} from "../../services/actions/resetPasswordActions";

interface HistoryState {
  action: string;
}

function ResetPassword() {
  const dispatch = useAppDispatch();
  const history = useHistory<HistoryState>();

  const { token, password } = useAppSelector(
    (store) => store.resetPassword.form
  );
  const { resetPasswordRequest, resetPasswordFailed } = useAppSelector(
    (store) => store.resetPassword
  );

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setResetPasswordFormValue(e.target.name, e.target.value));
  };

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postResetPasswordRequest(password, token));
    },
    [password, token, dispatch]
  );

  if (history.action === "POP") return <Redirect to={{ pathname: "/" }} />;

  return (
    <main className={styles.section}>
      <div className={styles.container}>
        {resetPasswordRequest ? (
          <Loader />
        ) : resetPasswordFailed ? (
          <h1>Произошла ошибка при отправке данных</h1>
        ) : (
          <>
            <h2 className={styles.heading}>Восстановление пароля</h2>
            <form className={styles.form} onSubmit={onFormSubmit}>
              <div className={styles.input}>
                <PasswordInput
                  onChange={onFormChange}
                  value={password}
                  name={"password"}
                />
              </div>
              <div className={styles.input}>
                <Input
                  type={"text"}
                  placeholder={"Введите код из письма"}
                  onChange={onFormChange}
                  value={token}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                  name={"token"}
                />
              </div>
              <div className={styles.button}>
                <Button type="primary" size="medium">
                  Сохранить
                </Button>
              </div>
            </form>
            <div className={styles.footer}>
              <p className={styles.text}>Вспомнили пароль?</p>
              <Link className={styles.text} to="/login">
                Войти
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default ResetPassword;
