import styles from "./Register.module.css";
import { useState } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function Register() {
  // TODO: перенести в REDUX
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const onChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Регистрация</h2>
      <form className={styles.form}>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={styles.input}>
          <Input
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
          <PasswordInput onChange={onChange} value={password} />
        </div>
        <div className={styles.button}>
          <Button type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>
      </form>
      <div className={styles.footer}>
        <p className={styles.text}>Уже зарегистрированы?</p>
        <Link className={styles.text} to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
