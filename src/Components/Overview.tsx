import React, { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import GradientBox from "src/Components/Accounting/GradientBox";
import Income from "src/Components/Accounting/Income";
import Expenses from "src/Components/Accounting/Expenses";
import Profit from "src/Components/Accounting/Profit";
import Grid from "@material-ui/core/Grid";

interface Props {}
const useStyles = makeStyles({
  wrapper: {
    marginTop: "3vh",
  },
  Siteler: {
    marginTop: "1vh",
  },
  div: {
    margin: "5vh 0vh",
  },
});
export default function Sites({}: Props): ReactElement {
  const cls = useStyles();
  return (
    <div className={cls.div}>
      <Typography variant="h4" component="h2" className={cls.Siteler}>
        Genel Durum
      </Typography>
      <Grid container justify="space-evenly" className={cls.wrapper}>
        <Income />
        <Expenses />
        <Profit />
      </Grid>
    </div>
  );
}
