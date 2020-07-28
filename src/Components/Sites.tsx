// @ts-nocheck
import React, { ReactElement, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Community from "src/Components/Community";
import { connect } from "react-redux";
import Link from "src/Link";

const useStyles = makeStyles({
  Siteler: {
    marginTop: "2vh",
  },
  chip: {
    margin: "0.2rem 1rem",
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
});
function Sites({ communities }): ReactElement {
  const cls = useStyles();
  const [community, setCommunity] = useState(false);
  const addCommunity = () => {
    setCommunity(true);
  };
  const backToCommunity = () => {
    setCommunity(false);
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
          <Grid container className={cls.container}>
            {communities.map((com) => (
              <Link href={com}>
                <Chip
                  key={com}
                  label={com}
                  onClick={() => console.log(com)}
                  clickable
                  color="primary"
                  className={cls.chip}
                  variant="outlined"
                ></Chip>
              </Link>
            ))}
            <Button
              variant="contained"
              color="primary"
              className={cls.addNew}
              onClick={addCommunity}
            >
              SİTE EKLE
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

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(Sites);
