import styles from "./Register.module.css";
import { useCallback } from "react";
import Loader from "../../components/Loader/Loader";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterFormValue } from "../../services/actions/registerActions";
import { postRegisterRequest } from "../../utils/api";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { name, email, password } = useSelector((store) => store.register.form);
  const { registerRequest, registerFailed } = useSelector(
    (store) => store.register
  );

  const onFormChange = (e) => {
    dispatch(setRegisterFormValue(e.target.name, e.target.value));
  };

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(postRegisterRequest(email, password, name, history));
    },
    [email, password, name, dispatch, history]
  );

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
