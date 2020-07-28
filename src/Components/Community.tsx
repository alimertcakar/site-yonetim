// @ts-nocheck
import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { communitySlice } from "src/Components/Slices/communitySlice";

const useStyles = makeStyles((theme: any) => ({}));

function AddCommunity({ back, add }) {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (x: string) => {
    add(x.siteismi);
    back();
  };

  return (
    <div>
      <Grid container justify="center">
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ fontSize: "1.5rem" }}
            onClick={back}
          >
            &larr;
          </Button>
          <TextField
            id="outlined-basic"
            label="Site ismi"
            variant="outlined"
            name="siteismi"
            inputRef={register({ maxLength: 15, required: "Required" })}
          />
          <Button variant="contained" color="primary" type="submit">
            Tamam
          </Button>
        </form>
      </Grid>
    </div>
  );
}

const add = communitySlice.actions.add;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    add: (comm) => dispatch(add(comm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCommunity);
