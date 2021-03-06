//@ts-nocheck
import { useRouter } from "next/router";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import { TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { communitySlice } from "src/Components/Slices/communitySlice";
import { useState } from "react";
import ApartmentFrom from "src/Components/ApartmentComplexForm";
import ApartmentComplexes from "src/Components/ApartmentComplexes";

const useStyles = makeStyles((theme) => ({
  textfield: {
    width: "100%",
    marginBottom: "2vh",
  },
  addButton: {
    paddingBottom: "10px",
    paddingRight: "10px",
    boxShadow:
      "6px 12px 10px -10px rgba(87,87,87,0.6), -2px -2px 7px rgba(150, 150, 150, 0.25);",

    paddingTop: "11px",
    paddingLeft: "12px",
  },
  typographyHeader: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  paper: {
    padding: "1rem",
  },
}));

function Community({ communityState, addApartment, removeApartment }) {
  const router = useRouter();
  const cls = useStyles();
  const { community } = router.query;
  const [showAddApartment, setShowAddApartment] = useState(false);
  let currentCom = { communityName: "loading" };
  try {
    currentCom = communityState.find((coms) => {
      return coms.communityName === community;
    });
  } catch {
    console.log("loading values");
  }

  const addApartmentHandler = (val) => {
    addApartment({ community, apartment: val });
    setShowAddApartment(!showAddApartment);
  };

  const showAddApartmentMenu = () => {
    setShowAddApartment(!showAddApartment);
  };
  try {
    return (
      <Container>
        <Typography
          variant="h3"
          component="h2"
          color="primary"
          className={cls.typographyHeader}
        >
          Site: {currentCom.communityName || "loading"}
        </Typography>
        <TextField
          id="standard-search"
          variant="filled"
          label="Ara"
          type="search"
          placeholder="falanca apartman"
          className={cls.textfield}
        />

        <Paper elevation={1} variant="outlined" className={cls.paper}>
          <Grid>
            {showAddApartment && (
              <ApartmentFrom
                addApartment={addApartmentHandler}
                back={showAddApartmentMenu}
              />
            )}
          </Grid>
          <Grid container justify="flex-end" className={cls.addCommunity}>
            {!showAddApartment && (
              <Button
                variant="contained"
                color="primary"
                className={cls.addButton}
                onClick={showAddApartmentMenu}
              >
                Blok/apartman ekle...
              </Button>
            )}
          </Grid>
          <ApartmentComplexes
            apartments={currentCom.apartments}
            community={community}
          />
        </Paper>
      </Container>
    );
  } catch {
    console.log("loading communities");
    return "loading";
  }
}

interface IMapState {
  community: object;
}
const mapStateToProps = (state: IMapState) => ({
  communityState: state.community,
});

const addApartment = communitySlice.actions.addApartment;

const mapDispatchToProps = (dispatch) => ({
  addApartment: (val: object) => dispatch(addApartment(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);
