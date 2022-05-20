import styles from "./styles.module.css";
import MenuItem from "../MenuItem";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { APP_HEADER_LINKS } from "../../constants/content";

import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.flex}>
          <div className={styles.flex}>
            <MenuItem
              linkStyle={styles.link + " pr-5 mr-2"}
              textStyle={"ml-2"}
              icon={<BurgerIcon type="secondary" />}
              to={"/react-burger"}
              text={APP_HEADER_LINKS.CONSTRUCTOR}
            />

            <MenuItem
              linkStyle={styles.link + " pr-5 pl-5"}
              textStyle={"ml-2"}
              icon={<ListIcon type="secondary" />}
              to={"/feed"}
              text={APP_HEADER_LINKS.ORDER_FEED}
            />
          </div>

          <div className={styles.logo}>
            <Link to="/react-burger">
              <Logo />
            </Link>
          </div>
          <MenuItem
            linkStyle={styles.link + " pl-5"}
            textStyle={"ml-2"}
            icon={<ProfileIcon type="secondary" />}
            to={"/profile"}
            text={APP_HEADER_LINKS.ACCOUNT}
          />
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
