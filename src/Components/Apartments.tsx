// @ts-nocheck
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

let isBrowser = true;
if (typeof window === "undefined") isBrowser = false;

const useStyles = makeStyles({
  paper: {
    height: "40px",
    lineHeight: "40px",
    paddingLeft: "10px",
    marginTop: "2px",
  },
});
export default function Apartments({ apartments }): ReactElement {
  const cls = useStyles();
  const router = useRouter();
  function gotoApartment() {
    router.push(router.query.community + "/a1");
  }
  return (
    <List>
      {apartments.map((apartment) => {
        return (
          <ListItem button onClick={gotoApartment}>
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText> {apartment}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
}
