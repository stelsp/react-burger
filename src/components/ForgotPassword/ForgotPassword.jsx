import styles from "./ForgotPassword.module.css";
import { useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function ForgotPassword() {
  // TODO: перенести в REDUX
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Восстановление пароля</h2>
      <form className={styles.form}>
        <div className={styles.input}>
          <Input
            type={"email"}
            placeholder={"Укажите e-mail"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
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
