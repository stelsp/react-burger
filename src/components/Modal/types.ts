import { ReactNode } from "react";

export default interface IModalProps {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}
