import styles from "./ResetPassword.module.css";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { setResetPasswordFormValue } from "../../services/actions/actions";
import { postResetPasswordRequest } from "../../utils/api";

function ResetPassword() {
  const dispatch = useDispatch();

  const { token, password } = useSelector((store) => store.resetPassword.form);

  const onFormChange = (e) => {
    dispatch(setResetPasswordFormValue(e.target.name, e.target.value));
  };

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postResetPasswordRequest(password, token));
    },
    [password, token]
  );

  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default ResetPassword;
