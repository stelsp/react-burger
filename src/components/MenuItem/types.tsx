import { ReactNode } from "react";

export interface IMenuItem {
  linkStyle: string;
  to: string;
  icon: ReactNode;
  textStyle: string;
  text: string;
}
