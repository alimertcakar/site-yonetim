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
function StepTwo({}): ReactElement {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container justify="center">
          <TextField
            id="outlined-basic"
            label="Site ismi seç"
            variant="outlined"
          />
        </Grid>
      </Paper>
    </div>
  );
}

export default StepTwo;
