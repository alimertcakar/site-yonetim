import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Link from "../src/Link";
import Siteler from "Components/Sites.tsx";

const useStyles = makeStyles({
  boxWrap: {
    padding: "0.15rem",
    position: "relative",
    background:
      "linear-gradient(to bottom, rgba(114,113,120,0.50) 0%, rgba(55,53,75,0.60) 44%, rgba(20,20,36,0.7) 100%);",
    borderRadius: "14px",
    marginTop: "1vh",
  },
  box: {
    borderRadius: "10px",
    padding: "0.15rem",
    margin: 0,
    background: "white",
  },
  SelmaButton: {
    padding: 0,
  },
  SelmaText: {
    display: "block",
    textAlign: "center",
    fontWeight: 400,
  },
  SelmaTextDesc: {
    display: "block",
    fontSize: "1.2rem",
    textAlign: "center",
    fontWeight: 400,
    padding: "1rem",
  },
  imageIcon: {
    height: "100px",
  },
  iconRoot: {
    height: "100px",
    width: "30px",
    textAlign: "center",
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.boxWrap}>
        <Box my={4} className={classes.box}>
          <Grid container>
            <Grid item>
              <Icon classes={{ root: classes.iconRoot }}>
                <img className={classes.imageIcon} src="/img/Long.svg" />
              </Icon>
              <Typography className={classes.SelmaText}>Selma</Typography>
            </Grid>

            <Grid item>
              <Typography className={classes.SelmaTextDesc} gutterBottom>
                Apartman Yönetim Asistanınız
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>

      <Siteler />
    </Container>
  );
}

/*      <Link href="/res" color="secondary">
Reserved link
</Link> */
