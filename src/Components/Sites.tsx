import React, { ReactElement, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Link from "src/Link";
import Community from "src/Components/Community";

interface Props {}
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
export default function Sites({}: Props): ReactElement {
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
            <Chip
              clickable
              color="secondary"
              className={cls.chip}
              label="Muhittin Topalak Sitesi"
            ></Chip>
            <Chip
              clickable
              color="secondary"
              className={cls.chip}
              label="Kazlıçeşmeli Sitesi"
            ></Chip>

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
