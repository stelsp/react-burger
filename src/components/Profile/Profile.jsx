import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
  const [value, setValue] = useState("value");
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to="/profile" className={styles.link}>
          Профиль
        </Link>
        <Link className={styles.link}>История заказов</Link>
        <Link className={styles.link}>Выход</Link>
        <p className={styles.text}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setValue(e.target.value)}
            icon={"EditIcon"}
            value={value}
            name={"name"}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Логин"}
            onChange={(e) => setValue(e.target.value)}
            icon={"EditIcon"}
            value={value}
            name={"name"}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={styles.input}>
          <Input
            type={"text"}
            placeholder={"Пароль"}
            onChange={(e) => setValue(e.target.value)}
            icon={"EditIcon"}
            value={value}
            name={"name"}
            error={false}
            onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
