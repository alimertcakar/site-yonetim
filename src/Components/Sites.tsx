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
import Textfield from "@material-ui/core/Textfield";
import BusinessIcon from "@material-ui/icons/Business";

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
          <Textfield
            className={cls.textfield}
            placeholder="Site ara"
          ></Textfield>
          <Grid container className={cls.container}>
            {communities.map((com) => (
              <Link href={com.communityName}>
                <Chip
                  key={com.communityName}
                  label={com.communityName}
                  onClick={() => console.log(com.communityName)}
                  onDelete={() => {
                    console.log(onDelete);
                  }}
                  clickable
                  icon={<BusinessIcon />}
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

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(Sites);
