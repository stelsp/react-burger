import styles from "./ResetPassword.module.css";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { setResetPasswordFormValue } from "../../services/actions/resetPasswordActions";
import { postResetPasswordRequest } from "../../utils/api";

function ResetPassword() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { token, password } = useSelector((store) => store.resetPassword.form);
  const { resetPasswordRequest, resetPasswordFailed } = useSelector(
    (store) => store.resetPassword
  );

  const onFormChange = (e) => {
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
                  placeholder={"Введите новый пароль"}
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
