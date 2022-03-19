import styles from "./ResetPassword.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setResetPasswordFormValue } from "../../services/actions/actions";

function ResetPassword() {
  const dispatch = useDispatch();

  const { emailCode, newPassword } = useSelector(
    (store) => store.resetPassword.form
  );

  const onFormChange = (e) => {
    dispatch(setResetPasswordFormValue(e.target.name, e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Восстановление пароля</h2>
      <form className={styles.form}>
        <div className={styles.input}>
          <PasswordInput
            onChange={onFormChange}
            value={newPassword}
            placeholder={"Введите новый пароль"}
            name={"newPassword"}
          />
        </div>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={onFormChange}
            value={emailCode}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            name={"emailCode"}
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
