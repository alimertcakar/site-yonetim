// @ts-nocheck
import React, { ReactElement, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Community from "src/Components/CommunityForm";
import { connect } from "react-redux";
import Link from "src/Link";
import TextField from "@material-ui/core/TextField";
import BusinessIcon from "@material-ui/icons/Business";
import { communitySlice } from "src/Components/Slices/communitySlice";
import Router from "next/router";

const useStyles = makeStyles({
  Siteler: {
    marginTop: "2vh",
  },
  chip: {
    margin: "0.2rem 1rem",
    padding: "1.1rem 0.5rem 1rem",
  },
  container: {
    margin: "2rem 0rem",
  },
  addNew: {
    margin: "0rem 1.5rem",
  },
  addNewLink: {
    color: "white",
    "&:hover": {
      textDecoration: "none",
    },
  },
  textfield: {
    width: "100%",
    marginTop: "2vh",
  },
});
function Sites({ communities, remove }): ReactElement {
  const cls = useStyles();
  const [community, setCommunity] = useState(false);
  const addCommunity = () => {
    setCommunity(true);
  };
  const backToCommunity = () => {
    setCommunity(false);
  };
  const gotoCommunity = (com) => {
    Router.push(com);
  };
  return (
    <div>
      {community ? (
        <Community back={backToCommunity} />
      ) : (
        <div>
          <Typography variant="h4" component="h2" className={cls.Siteler}>
            Siteler
          </Typography>
          <TextField
            className={cls.textfield}
            placeholder="Site ara"
          ></TextField>
          <Grid container className={cls.container}>
            {communities.map((com) => (
              <Chip
                key={com.communityName}
                label={com.communityName}
                onClick={() => gotoCommunity(com.communityName)}
                onDelete={() => {
                  remove(com.communityName);
                }}
                clickable
                icon={<BusinessIcon />}
                color="primary"
                className={cls.chip}
                variant="outlined"
              ></Chip>
            ))}
            <Button
              variant="contained"
              color="primary"
              className={cls.addNew}
              onClick={addCommunity}
            >
              SİTE EKLE...
            </Button>
          </Grid>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  communities: state.community,
});

const remove = communitySlice.actions.remove;

const mapDispatchToProps = (dispatch) => ({
  remove: (comm) => dispatch(remove({ communityName: comm })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sites);
