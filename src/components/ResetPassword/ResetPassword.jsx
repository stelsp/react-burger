import styles from "./ResetPassword.module.css";
import { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function ResetPassword() {
  // TODO: перенести в REDUX
  const [emailCode, setEmailCode] = useState("");

  const [password, setPassword] = useState("");
  const onChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Восстановление пароля</h2>
      <form className={styles.form}>
        <div className={styles.input}>
          <PasswordInput
            onChange={onChange}
            value={password}
            placeholder={"Введите новый пароль"}
          />
        </div>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setEmailCode(e.target.value)}
            value={emailCode}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
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
