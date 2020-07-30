// @ts-nocheck
import { useRouter } from "next/router";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { communitySlice } from "src/Components/Slices/communitySlice";

const useStyles = makeStyles((theme) => ({
  textfield: {
    width: "100%",
    marginBottom: "2vh",
  },
  addCommunity: {
    marginTop: "2vh",
  },
  addButton: {
    paddingBottom: "10px",
    paddingRight: "10px",
    boxShadow:
      "6px 12px 10px -10px rgba(87,87,87,0.6), -2px -2px 7px rgba(150, 150, 150, 0.25);",

    paddingTop: "11px",
    paddingLeft: "12px",
  },
}));

function Community({ communityState, addApartment }) {
  const router = useRouter();
  const cls = useStyles();
  const { community } = router.query;

  let currentCom = {};
  currentCom = communityState.find((coms) => {
    return coms.communityName === community || { communityName: "loading" };
  });

  const addApartmentHandler = () => {
    addApartment({ community, apartment: "cız" });
  };

  return (
    <Container>
      <h1>
        query: {community} communityName: {currentCom.communityName}
      </h1>
      <TextField
        id="standard-search"
        variant="filled"
        label="Ara"
        type="search"
        placeholder="falanca apartman"
        className={cls.textfield}
      />
      <Grid container justify="flex-end" className={cls.addCommunity}>
        <Button
          variant="outlined"
          className={cls.addButton}
          onClick={addApartmentHandler}
        >
          Blok/apartman ekle:
        </Button>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  communityState: state.community,
});

const addApartment = communitySlice.actions.addApartment;
const mapDispatchToProps = (dispatch) => ({
  addApartment: (val) => dispatch(addApartment(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);
