import React, { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = (style) =>
  makeStyles((theme) => ({
    box: {
      color: "white",
      height: "70px",
      width: "200px",
      backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.5) 5%, ${style.color} 50%),   linear-gradient(to right, ${style.color}, ${style.color} 100%)`,
      borderRadius: "20px",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    label: {
      marginTop: "15px",
      textAlign: "center",
      display: "block",
      fontWeight: "bold",
    },
    amount: {
      fontWeight: "bold",
      textAlign: "center",
      display: "block",
      fontSize: "1.3em",
    },
  }));
export default function Sites({ boxStyle, label, amount }): ReactElement {
  const cls = useStyles(boxStyle)();
  return (
    <div className={cls.box}>
      <span className={cls.label}>{label}</span>
      <span className={cls.amount}>₺ {amount}</span>
    </div>
  );
}
