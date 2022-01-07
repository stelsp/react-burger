import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import AppHeaderStyle from "./AppHeader.module.css";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

export default function AppHeader() {
  const textDecorationNone = {
    textDecoration: "none",
  };

  return (
    <div className={AppHeaderStyle.flex}>
      <a
        href="#"
        className="text text_type_main-default text_color_inactive"
        style={textDecorationNone}
      >
        <BurgerIcon type="primary" /> Конструктор
      </a>
      <a
        href="#"
        className="text text_type_main-default text_color_inactive"
        style={textDecorationNone}
      >
        <ListIcon type="primary" /> Лента заказов
      </a>
      <Logo></Logo>

      <a
        href="#"
        className="text text_type_main-default text_color_inactive"
        style={textDecorationNone}
      >
        <ProfileIcon type="primary" /> Личный кабинет
      </a>
    </div>
  );
}
