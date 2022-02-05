import styles from "./AppHeader.module.css";
import MenuItem from "../MenuItem/MenuItem";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.flex}>
          <div className={styles.flex}>
            <MenuItem
              linkStyle={styles.link + " pr-5 mr-2"}
              textStyle={"ml-2"}
              icon={<BurgerIcon type="secondary" />}
              href={"#"}
              text={"Конструктор"}
            />

            <MenuItem
              linkStyle={styles.link + " pr-5 pl-5"}
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
            linkStyle={styles.link + " pl-5"}
            textStyle={"ml-2"}
            icon={<ProfileIcon type="secondary" />}
            href={"#"}
            text={"Личный кабинет"}
          />
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
