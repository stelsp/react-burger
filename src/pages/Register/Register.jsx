import styles from "./Register.module.css";
import Loader from "../../components/Loader";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  postRegisterRequest,
  setRegisterFormValue,
} from "../../services/actions/registerActions";

function Register() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { name, email, password } = useSelector((store) => store.register.form);
  const { registerRequest, registerFailed } = useSelector(
    (store) => store.register
  );
  const { isLoggedIn } = useSelector((store) => store.profile);

  const onFormChange = (e) => {
    dispatch(setRegisterFormValue(e.target.name, e.target.value));
  };

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postRegisterRequest(email, password, name));
    },
    [email, password, name, dispatch]
  );

  if (isLoggedIn) {
    return (
      <Redirect
        // Если объект state не является undefined, вернём пользователя назад.
        to={location?.state?.from || "/"}
      />
    );
  }

  return (
    <main className={styles.section}>
      <div className={styles.container}>
        {registerRequest ? (
          <Loader />
        ) : registerFailed ? (
          <h1>Произошла ошибка при отправке данных</h1>
        ) : (
          <>
            <h2 className={styles.heading}>Регистрация</h2>
            <form className={styles.form} onSubmit={onFormSubmit}>
              <div className={styles.input}>
                <Input
                  type={"text"}
                  placeholder={"Имя"}
                  onChange={onFormChange}
                  value={name}
                  error={false}
                  errorText={"Ошибка"}
                  size={"default"}
                  name={"name"}
                />
              </div>
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
                <Button type="primary" size="medium" htmlType="submit">
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
          </>
        )}
      </div>
    </main>
  );
}

export default Register;
