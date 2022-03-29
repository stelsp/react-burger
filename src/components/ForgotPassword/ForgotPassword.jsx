import styles from "./ForgotPassword.module.css";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { setForgotPasswordFormValue } from "../../services/actions/forgotPasswordActions";
import { postForgotPasswordRequest } from "../../utils/api";

function ForgotPassword() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { email } = useSelector((store) => store.forgotPassword.form);
  const { forgotPasswordRequest, forgotPasswordFailed } = useSelector(
    (store) => store.forgotPassword
  );

  const onFormChange = (e) => {
    dispatch(setForgotPasswordFormValue(e.target.name, e.target.value));
  };

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postForgotPasswordRequest(email, history));
    },
    [email, dispatch, history]
  );

  return (
    <div className={styles.container}>
      {forgotPasswordRequest ? (
        <Loader />
      ) : forgotPasswordFailed ? (
        <h1>Произошла ошибка при отправке данных</h1>
      ) : (
        <>
          <h2 className={styles.heading}>Восстановление пароля</h2>
          <form className={styles.form} onSubmit={onFormSubmit}>
            <div className={styles.input}>
              <Input
                type={"email"}
                placeholder={"Укажите e-mail"}
                onChange={onFormChange}
                value={email}
                error={false}
                errorText={"Ошибка"}
                size={"default"}
                name={"email"}
              />
            </div>
            <div className={styles.button}>
              <Button type="primary" size="medium">
                Восстановить
              </Button>
            </div>
          </form>
          <div className={styles.footer}>
            <p className={styles.text}>Вспомнили пароль?</p>
            <Link className={styles.text} to="/register">
              Войти
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ForgotPassword;
