import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/styles";
import GradientBox from "src/Components/Accounting/GradientBox";

interface Props {}
const useStyles = makeStyles({});
export default function Sites({}: Props): ReactElement {
  const cls = useStyles();
  return (
    <GradientBox
      boxStyle={{ color: "#f01313" }}
      label="TOPLAM GİDER"
      amount="+0.0,00"
    ></GradientBox>
  );
}
