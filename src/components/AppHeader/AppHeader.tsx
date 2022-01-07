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
  return (
    <div className={AppHeaderStyle.flex}>
      <div className={AppHeaderStyle.flex}>
        <div
          className="mr-2 mt-4 mb-4 pt-5 pr-5 pb-5"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default text_color_primary ml-2">
            Конструктор
          </p>
        </div>

        <div
          className="mt-4 mb-4 pt-5 pr-5 pb-5"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2">
            Лента заказов
          </p>
        </div>
      </div>

      <div className={AppHeaderStyle.logo}>
        <Logo />
      </div>

      <div
        className="mt-4 mb-4 pt-5 pl-5 pb-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive ml-2">
          Личный кабинет
        </p>
      </div>
    </div>
  );
}
