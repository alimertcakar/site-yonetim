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
    <Paper className={classes.paper}>
      <Grid container justify="center">
        <Grid item style={{ width: "100%", textAlign: "center" }}>
          <TextField
            id="outlined-basic"
            label="Apartman/blok ismi"
            variant="outlined"
          />
        </Grid>
        <Grid item style={{ marginTop: "1vh", padding: "1rem 1rem" }}>
          <Button variant="contained" color="primary">
            +
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default StepTwo;
