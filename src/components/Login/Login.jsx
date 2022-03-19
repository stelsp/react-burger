import styles from "./Login.module.css";

import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginFormValue } from "../../services/actions/actions";

function Login() {
  const dispatch = useDispatch();

  const { email, password } = useSelector((store) => store.login.form);

  const onFormChange = (e) => {
    dispatch(setLoginFormValue(e.target.name, e.target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Вход</h2>
      <form className={styles.form}>
        <div className={styles.input}>
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={onFormChange}
            value={email}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            name={"email"}
          />
        </div>
        <div className={styles.input}>
          <PasswordInput
            onChange={onFormChange}
            value={password}
            name={"password"}
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
