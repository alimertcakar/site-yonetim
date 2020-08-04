// @ts-nocheck
//TODO Bugfix, remove apartments by id, not by name.
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { connect } from "react-redux";
import Link from "src/Link";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ApartmentIcon from "@material-ui/icons/Apartment";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import { communitySlice } from "src/Components/Slices/communitySlice";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

let isBrowser = true;
if (typeof window === "undefined") isBrowser = false;

const useStyles = makeStyles({
  paper: {
    height: "40px",
    lineHeight: "40px",
    paddingLeft: "10px",
    marginTop: "2px",
  },
  button: {
    color: "red",
  },
});
function Apartments({ apartments, removeApartment }): ReactElement {
  const cls = useStyles();
  const router = useRouter();
  function gotoApartment(address) {
    router.push(router.query.community + "/" + address);
  }
  return (
    <List>
      {apartments.apartment.map((apartment) => {
        return (
          <>
            <ListItem button onClick={() => gotoApartment(apartment.apartment)}>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText> {apartment.apartment}</ListItemText>
              <ListItemSecondaryAction
                onClick={() => {
                  removeApartment({
                    community: "bykdsit",
                    apartment: apartment.apartment,
                  });
                }}
              >
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </>
        );
      })}
    </List>
  );
}
const mapStateToProps = (state) => ({});

const removeApartment = communitySlice.actions.removeApartment;

const mapDispatchToProps = (dispatch) => ({
  removeApartment: (val) => dispatch(removeApartment(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Apartments);
