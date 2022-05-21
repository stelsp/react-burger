import { ReactNode } from "react";
export interface IModalRouteProps {
  modal: ReactNode;
  page: ReactNode;
  path: string;
  exact?: boolean;
  title?: string;
}
