import { ReactNode } from "react";

export default interface IMenuItemProps {
  linkStyle: string;
  to: string;
  icon: ReactNode;
  textStyle: string;
  text: string;
}
