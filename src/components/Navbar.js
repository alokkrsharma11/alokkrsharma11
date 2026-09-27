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
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import BuildIcon from "@material-ui/icons/Build";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import DescriptionIcon from "@material-ui/icons/Description";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../Photo.png";
import Footer from "../components/Footer";
import { ArrowForward } from "@material-ui/icons";
import briefcaseIcon from '../images/icon-transparent.png';
import { usePortfolioTheme } from "../context/ThemeContext";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "var(--navbar-bg)",
    margin: 0,
    textAlign: "right",
  },
  arrow: {
    color: "var(--accent)",
    align: "right"
  },
  title: {
    color: "var(--secondary)",
  },
  menuSliderContainer: {
    width: 320,
    background: "var(--drawer-bg)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "var(--secondary)",
  },
  heading: {
    color: "var(--accent)",
    textTransform: "camelcase",
  },
  themeSwitcherContainer: {
    padding: "1rem",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    marginTop: "auto",
  },
  themeLabel: {
    color: "var(--secondary)",
    fontSize: "0.75rem",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  swatchRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  swatch: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    cursor: "pointer",
    border: "2px solid transparent",
    transition: "border 0.2s, transform 0.2s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  swatchActive: {
    border: "2px solid var(--primary-text)",
  },
}));

const menuItems = [
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/" },
  { listIcon: <DescriptionIcon />, listText: "Career Summary", listPath: "/summary" },
  { listIcon: <PersonIcon />, listText: "Projects", listPath: "/project" },
  { listIcon: <WorkIcon />, listText: "Experience", listPath: "/experience" },
  { listIcon: <SchoolIcon />, listText: "Education", listPath: "/education" },
  { listIcon: <BuildIcon />, listText: "Skills", listPath: "/skills" },
  { listIcon: <EmojiEventsIcon />, listText: "Achievements", listPath: "/achievements" },
  { listIcon: <MailIcon />, listText: "Contact", listPath: "/contact" },
];

const Navbar = ({title}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { activeTheme, selectTheme, themes } = usePortfolioTheme();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Alok Kumar Sharma" />
      <Divider />
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
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
      <Box className={classes.themeSwitcherContainer}>
        <Typography className={classes.themeLabel}>Theme</Typography>
        <Box className={classes.swatchRow}>
          {Object.values(themes).map((t) => (
            <Box
              key={t.id}
              className={`${classes.swatch} ${activeTheme.id === t.id ? classes.swatchActive : ""}`}
              style={{ backgroundColor: t.swatch }}
              onClick={() => selectTheme(t.id)}
              title={t.name}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Typography
              variant="h5"
              className={classes.title}
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={briefcaseIcon}
                alt="Briefcase Icon"
                width="30"
                height="30"
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              /> About Me
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
