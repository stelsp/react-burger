import styles from "./styles.module.css";
import { useCallback } from "react";
import Loader from "../../components/Loader";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  postLoginRequest,
  setLoginFormValue,
} from "../../services/actions/loginActions";

interface LocationState {
  from: {
    pathname: string;
  };
}

function Login() {
  const dispatch = useAppDispatch();
  const location = useLocation<LocationState>();

  const { email, password } = useAppSelector((store) => store.login.form);
  const { loginRequest, loginFailed } = useAppSelector((store) => store.login);
  const { isLoggedIn } = useAppSelector((store) => store.profile);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLoginFormValue(e.target.name, e.target.value));
  };

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postLoginRequest(email, password));
    },
    [email, password, dispatch]
  );

  if (isLoggedIn) {
    return (
      <Redirect
        // Если объект state не является undefined, вернём пользователя назад.
        to={location?.state?.from || "/react-burger"}
      />
    );
  }

  return (
    <main className={styles.section}>
      <div className={styles.container}>
        {loginRequest ? (
          <Loader />
        ) : loginFailed ? (
          <h1>Произошла ошибка при отправке данных</h1>
        ) : (
          <>
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
              <Link
                className={styles.text}
                to={{ pathname: "/forgot-password" }}
              >
                Восстановить пароль
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Login;
