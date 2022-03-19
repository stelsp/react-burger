import styles from "./ForgotPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setForgotPasswordFormValue } from "../../services/actions/actions";

function ForgotPassword() {
  const dispatch = useDispatch();

  const { email } = useSelector((store) => store.forgotPassword.form);

  const onFormChange = (e) => {
    dispatch(setForgotPasswordFormValue(e.target.name, e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Восстановление пароля</h2>
      <form className={styles.form}>
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
    </div>
  );
}

export default ForgotPassword;
