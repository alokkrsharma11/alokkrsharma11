import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
//import ArrowBack from "@material-ui/icons/ArrowBack";
//import AssignmentInd from "@material-ui/icons/AssignmentInd";
// Dashboard/Home
import HomeIcon from "@material-ui/icons/Home";
// About
import PersonIcon from "@material-ui/icons/Person";
// Experience
import WorkIcon from "@material-ui/icons/Work";
// Education
import SchoolIcon from "@material-ui/icons/School";
// Skills
import BuildIcon from "@material-ui/icons/Build";
// Achievements
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
// Blog / Articles
import DescriptionIcon from "@material-ui/icons/Description";
// Contact
import MailIcon from "@material-ui/icons/Mail";
//import Home from "@material-ui/icons/Home";
//import Apps from "@material-ui/icons/Apps";
//import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../Photo.png";
import Footer from "../components/Footer";
import { ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#19191aff",
    margin: 0,
    textAlign: "right"
  },
  arrow: {
    color: "tomato",
    align: "right"
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 320,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  heading: {
    color: "tomato",
    textTransform: "camelcase",
  },
}));

const menuItems = [
  /*
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Experience", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },*/
   // 🔹 Added sections
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/" },
  { listIcon: <PersonIcon />, listText: "Projects", listPath: "/project" },
  { listIcon: <WorkIcon />, listText: "Experience", listPath: "/experience" },
  { listIcon: <SchoolIcon />, listText: "Education", listPath: "/education" },
  { listIcon: <BuildIcon />, listText: "Skills", listPath: "/skills" },
  { listIcon: <EmojiEventsIcon />, listText: "Achievements", listPath: "/achievements" },
  { listIcon: <DescriptionIcon />, listText: "Highlights", listPath: "/highlights" },
  { listIcon: <MailIcon />, listText: "Contact", listPath: "/contact" },
];

const Navbar = ({title}) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Alok Kumar Sharma" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              About Me
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <ArrowForward className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" align="center" className={classes.heading}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
