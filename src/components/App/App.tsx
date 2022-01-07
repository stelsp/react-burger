import React from "react";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/input";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/email-input";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/password-input";

import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "../../../node_modules/@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngridients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

import AppStyle from "./App.module.css";

export default function App() {
  return (
    <div className={AppStyle.App}>
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
}
