import styles from "./Login.module.css";
import { useCallback } from "react";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginFormValue } from "../../services/actions/loginActions";
import { postLoginRequest } from "../../utils/api";
import { useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password } = useSelector((store) => store.login.form);

  const onFormChange = (e) => {
    dispatch(setLoginFormValue(e.target.name, e.target.value));
  };

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postLoginRequest(email, password));
      history.replace({ path: "/" });
    },
    [email, password, dispatch]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Вход</h2>
      <form className={styles.form} onSubmit={onFormSubmit}>
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
