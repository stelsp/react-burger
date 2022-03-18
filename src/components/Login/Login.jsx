import styles from "./Login.module.css";
import { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function Login() {
  // TODO: перенести в REDUX
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const onChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Вход</h2>
      <form className={styles.form}>
        <div className={styles.input}>
          <Input
            className={styles.input}
            type={"email"}
            placeholder={"E-mail"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={styles.input}>
          <PasswordInput
            className={styles.input}
            onChange={onChange}
            value={password}
          />
        </div>
        <div className={styles.button}>
          <Button type="primary" size="medium">
            Войти
          </Button>
        </div>
      </form>
      <div className={styles.footer}>
        <p className={styles.text}>Вы — новый пользователь?</p>
        <Link className={styles.text} to="/register">
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.footer}>
        <p className={styles.text}>Забыли пароль?</p>
        <Link className={styles.text} to="/forgot-password">
          Восстановить пароль
        </Link>
      </div>
    </div>
  );
}

export default Login;