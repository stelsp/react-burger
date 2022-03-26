import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import { useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { setProfileValue } from "../../services/actions/actions";
import { fetchProfileInfo, patchProfileInfo } from "../../utils/api";

function Profile() {
  const nameRef = useRef(null);
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const onNameIconClick = () => {
    setTimeout(() => nameRef.current.focus(), 0);
  };
  const onLoginIconClick = () => {
    setTimeout(() => loginRef.current.focus(), 0);
  };
  const onPasswordIconClick = () => {
    setTimeout(() => passwordRef.current.focus(), 0);
  };

  const dispatch = useDispatch();

  const { name, login, password } = useSelector((store) => store.profile);

  useEffect(() => {
    dispatch(fetchProfileInfo());
  }, [dispatch]);

  const onFormChange = (e) => {
    dispatch(setProfileValue(e.target.name, e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to={"profile"} className={styles.link}>
          Профиль
        </Link>
        <Link to={"/"} className={styles.link}>
          История заказов
        </Link>
        <Link to={"login"} className={styles.link}>
          Выход
        </Link>
        <p className={styles.text}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onFormChange}
            icon={"EditIcon"}
            value={name}
            name={"name"}
            error={false}
            onIconClick={onNameIconClick}
            errorText={"Ошибка"}
            size={"default"}
            ref={nameRef}
          />
        </div>
        <div className={styles.input}>
          <Input
            type={"email"}
            placeholder={"Логин"}
            onChange={onFormChange}
            icon={"EditIcon"}
            value={login}
            name={"login"}
            error={false}
            onIconClick={onLoginIconClick}
            errorText={"Ошибка"}
            size={"default"}
            ref={loginRef}
          />
        </div>
        <div className={styles.input}>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={onFormChange}
            icon={"EditIcon"}
            value={password}
            name={"password"}
            error={false}
            onIconClick={onPasswordIconClick}
            errorText={"Ошибка"}
            size={"default"}
            ref={passwordRef}
          />
        </div>
        <div className={styles.button}>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
