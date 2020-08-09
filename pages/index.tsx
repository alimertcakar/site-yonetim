import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Sites from "src/Components/Sites";
import Overview from "src/Components/Overview";
import Graphics from "src/Components/Graphics";

const useStyles = makeStyles({
  boxWrap: {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",

    padding: "0.15rem",
    position: "relative",
    background:
      "linear-gradient(to bottom,#1C86D3 0%, #1C86D3 44%, #1077c2 100%);",
    borderRadius: "14px",
    margin: "0 3vw",
  },
  box: {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",

    borderRadius: "10px",
    padding: "0.15rem",
    margin: 0,
    background:
      "linear-gradient(to bottom,#1C86D3 0%, #1C86D3 44%, #1077c2 100%)",
    color: "white",
  },
  SelmaButton: {
    padding: 0,
  },

  TextDec: {
    display: "block",
    fontSize: "1.2rem",
    textAlign: "center",
    fontWeight: 400,
    padding: "1rem",
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.boxWrap}>
        <Box my={4} className={classes.box}>
          <Grid container justify="center">
            <Grid item>
              <Typography className={classes.TextDec} gutterBottom>
                Apartman Yönetim Asistanınız
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Overview />
      <Sites />
      <Graphics />
    </Container>
  );
}

/*      <Link href="/res" color="secondary">
Reserved link
</Link> */
