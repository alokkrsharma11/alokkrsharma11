import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import { LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "var(--footer-bg)",
    height: "55px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "var(--secondary)",
      "&:hover": {
        fill: "var(--accent)",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} />
      <BottomNavigationAction icon={<Twitter />} className={classes.root} />
      <BottomNavigationAction icon={<Instagram />} className={classes.root} />
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
