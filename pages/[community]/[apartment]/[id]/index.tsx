// @ts-nocheck
import { useRouter } from "next/router";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import { TextField, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Apartments from "src/Components/Apartments";
import { communitySlice } from "src/Components/Slices/communitySlice";
import { useState } from "react";
import ApartmentForm from "src/Components/ApartmentForm";

const useStyles = makeStyles((theme) => ({
  textfield: {
    width: "100%",
    marginBottom: "2vh",
  },
  addCommunity: {},
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

function Apartment({ apartmentComplexState, addApartment, removeRoom }) {
  const router = useRouter();
  const cls = useStyles();
  const [showAddApartment, setShowAddApartment] = useState(false);
  const { community, apartment, id } = router.query;
  const addApartmentHandler = (val) => {
    addApartment({ community, apartment: val, id });
    setShowAddApartment(!showAddApartment);
  };

  const showAddApartmentMenu = () => {
    setShowAddApartment(!showAddApartment);
  };
  let currentCommunity = {};
  let currentApartmentComplex;
  let currentApartment;
  let rooms = ["loading"];

  try {
    currentCommunity = apartmentComplexState.find((coms) => {
      return coms.communityName === community;
    });
    console.log(currentCommunity);

    currentApartmentComplex = currentCommunity.apartments.apartment.filter(
      (aps) => {
        return aps.apartment === apartment;
      }
    );
    currentApartment = currentApartmentComplex[0];
  } catch {
    console.log("loading community");
  }

  try {
    rooms = currentApartment.rooms;
  } catch {
    console.log("failed to load rooms");
  }
  try {
    return (
      <Container>
        <Typography
          variant="h3"
          component="h2"
          color="primary"
          className={cls.typographyHeader}
        >
          Site: {apartment}
        </Typography>
        <TextField
          id="standard-search"
          variant="filled"
          label="Ara"
          type="search"
          placeholder="x numaralı daire"
          className={cls.textfield}
        />
        <Paper elevation={1} variant="outlined" className={cls.paper}>
          <Grid container justify="flex-end" className={cls.addCommunity}>
            {!showAddApartment && (
              <Button
                variant="contained"
                color="primary"
                className={cls.addButton}
                onClick={showAddApartmentMenu}
              >
                Daire ekle...
              </Button>
            )}
          </Grid>
          {showAddApartment && (
            <ApartmentForm
              addApartment={addApartmentHandler}
              back={showAddApartmentMenu}
            />
          )}
          <Apartments
            apartments={rooms}
            removeRoom={removeRoom}
            community={community}
            apartment={apartment}
          />
        </Paper>
      </Container>
    );
  } catch {
    console.log("loading");
  }
}

const mapStateToProps = (state) => ({
  apartmentComplexState: state.community,
});

const addApartment = communitySlice.actions.addApartmentRoom; //* action is Add apartment room
const removeRoom = communitySlice.actions.removeRoom;

const mapDispatchToProps = (dispatch) => ({
  addApartment: (val) => dispatch(addApartment(val)),
  removeRoom: (val) => dispatch(removeRoom(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Apartment);
