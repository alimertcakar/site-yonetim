// @ts-nocheck
import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/styles";
import GradientBox from "src/Components/Accounting/GradientBox";

interface Props {}
const useStyles = makeStyles({});
export default function Sites({}: Props): ReactElement {
  const cls = useStyles();
  return (
    <GradientBox
      boxStyle={{ color: "#1C86D3" }}
      label="TOPLAM KÂR"
      amount="+9.990,30"
    ></GradientBox>
  );
}
