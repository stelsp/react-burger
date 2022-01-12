import React from "react";

export default function MenuItem(props: any) {
  return (
    <a href={props.href} className={props.linkStyle}>
      {props.icon}
      <span className={props.textStyle}>{props.text}</span>
    </a>
  );
}
