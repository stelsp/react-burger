import styles from "./AppHeader.module.css";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

export default function AppHeader() {
  return (
    <div className={styles.flex}>
      <div className={styles.flex}>
        <MenuItem
          style={"mt-4 mr-2 mb-4 pt-5 pr-5 pb-5 " + styles.flex}
          icon={<BurgerIcon type="primary" />}
          link={"#"}
          textStyle={
            "text text_type_main-default text_color_primary ml-2 " + styles.text
          }
          text={"Конструктор"}
        />

        <MenuItem
          style={"mt-4 mb-4 pt-5 pr-5 pb-5 " + styles.flex}
          icon={<ListIcon type="secondary" />}
          link={"#"}
          textStyle={
            "text text_type_main-default text_color_inactive ml-2 " +
            styles.text
          }
          text={"Лента заказов"}
        />
      </div>

      <div className={styles.logo}>
        <Logo />
      </div>

      <MenuItem
        style={"mt-4 mb-4 pt-5 pb-5 pl-5 " + styles.flex}
        icon={<ProfileIcon type="secondary" />}
        link={"#"}
        textStyle={
          "text text_type_main-default text_color_inactive ml-2 " + styles.text
        }
        text={"Личный кабинет"}
      />
    </div>
  );
}

function MenuItem(props: any) {
  return (
    <div className={props.style}>
      {props.icon}
      <a href={props.link} className={props.textStyle}>
        {props.text}
      </a>
    </div>
  );
}
