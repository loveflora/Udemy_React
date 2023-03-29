import React from "react";
import "./Card.css";

export default function Card(props) {
  const classes = "card " + props.className;

  // 안에 있는 요소들에 대해 .card css 적용
  return <div className={classes}>{props.children}</div>;
  // props.children : wrapper components
  // children : 예약어
}
