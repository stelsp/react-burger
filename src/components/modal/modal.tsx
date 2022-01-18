import React from "react";

export default function Modal({ open, children }: any) {
  if (!open) return null;

  return <div>{children}</div>;
}
