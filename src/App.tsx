import React from "react";

import { Button } from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { Logo } from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import { ConstructorElement } from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { Tab } from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { Input } from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/input";
import { Counter } from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { EmailInput } from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/email-input";
import { PasswordInput } from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/password-input";
import {
  BurgerIcon,
  CloseIcon,
  CheckMarkIcon,
  CurrencyIcon,
  DragIcon,
  EditIcon,
  HideIcon,
  InfoIcon,
  ListIcon,
  LockIcon,
  LogoutIcon,
  ProfileIcon,
  ShowIcon,
  DeleteIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MenuIcon,
} from "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

import "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/fonts/fonts.css";
import "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Logo />
        </div>
        <Button>Buy Now!</Button>
      </div>
    );
  }
}
