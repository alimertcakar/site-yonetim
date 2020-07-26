import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

import React, { ReactElement } from "react";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
  },
}));
function StepThree({}): ReactElement {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container justify="center">
        <TextField id="outlined-basic" label="Oturan ekle" variant="outlined" />
      </Grid>
    </Paper>
  );
}

export default StepThree;
