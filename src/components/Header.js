import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../Photo.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar className={classes.avatar} src={avatar} alt="Alok Kumar Sharma" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Alok Kumar Sharma"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend/Backend Developer",
            "Application Architect",
            "Cloud & DevOps Specialist",
          ]}
          typeSpeed={60}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
