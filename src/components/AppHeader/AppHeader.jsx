import styles from "./AppHeader.module.css";
import styled from "styled-components";
import MenuItem from "./MenuItem/MenuItem";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { APP_HEADER_LINKS } from "../../constants/content";

import { Link } from "react-router-dom";

const Header = styled.header`
  background: var(--background);
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function AppHeader() {
  return (
    <Header>
      <Wrapper>
        <Nav>
          <Container>
            <MenuItem
              linkStyle={styles.link + " pr-5 mr-2"}
              textStyle={"ml-2"}
              icon={<BurgerIcon type="secondary" />}
              to={"/"}
              text={APP_HEADER_LINKS.CONSTRUCTOR}
            />

            <MenuItem
              linkStyle={styles.link + " pr-5 pl-5"}
              textStyle={"ml-2"}
              icon={<ListIcon type="secondary" />}
              to={"/ingredients/60d3b41abdacab0026a733c7"}
              text={APP_HEADER_LINKS.ORDER_FEED}
            />
          </Container>

          <div className={styles.logo}>
            <Link to="/">
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
        </Nav>
      </Wrapper>
    </Header>
  );
}

export default AppHeader;
