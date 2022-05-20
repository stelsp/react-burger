import { ReactNode } from "react";

export interface IProtectedRouteProps {
  children: ReactNode;
  path: string;
  exact?: boolean;
}

export interface IModalRouteProps {
  modal: ReactNode;
  page: ReactNode;
  path: string;
  exact?: boolean;
  title?: string;
}
