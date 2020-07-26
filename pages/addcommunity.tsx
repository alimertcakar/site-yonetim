import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import StepButton from "@material-ui/core/StepButton";
import Link from "../src/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}));

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();

  return (
    <div>
      Site ismi belirle
      <TextField />
    </div>
  );
}
