import React from "react";

import styles from "./AppHeader.module.css";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

export default function AppHeader() {
  const linkStyle =
    "text text_type_main-default text_color_inactive mt-4 mb-4 pt-5 pb-5 ";

  return (
    <div className={styles.flex}>
      <div className={styles.flex}>
        <MenuItem
          linkStyle={"pr-5 mr-2 " + linkStyle + styles.link}
          textStyle={"ml-2"}
          icon={<BurgerIcon type="secondary" />}
          href={"#"}
          text={"Конструктор"}
        />

        <MenuItem
          linkStyle={"pr-5 pl-5 " + linkStyle + styles.link}
          textStyle={"ml-2"}
          icon={<ListIcon type="secondary" />}
          href={"#"}
          text={"Лента заказов"}
        />
      </div>

      <div className={styles.logo}>
        <Logo />
      </div>

      <MenuItem
        linkStyle={"pl-5 " + linkStyle + styles.link}
        textStyle={"ml-2"}
        icon={<ProfileIcon type="secondary" />}
        href={"#"}
        text={"Личный кабинет"}
      />
    </div>
  );
}

function MenuItem(props: any) {
  return (
    <a href={props.href} className={props.linkStyle}>
      {props.icon}
      <span className={props.textStyle}>{props.text}</span>
    </a>
  );
}
