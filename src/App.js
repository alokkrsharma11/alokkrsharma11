import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import "./App.css";
import CareerHighlights from "./components/CareerHighlights";

function ContextPathReader() {
  const location = useLocation();
  const contextPath = "/" + location.pathname.split("/")[1];
  console.log(contextPath);
  return contextPath;
}

const titles = {
  '/experience': "Experience",
  '/education': "Education",
  '/skills': "Skills",
  '/achievements': "Achievements",
  '/project': "Projects",
  '/highlights': "Highlights",
  '/contact': "Contact",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    // secondary: {
    //   main: "#FF6347", // 👈 add this
    // },
  },
});


function App() {

const currentContext = ContextPathReader();
const title = titles[currentContext] || "Home";
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Navbar title={title}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/achievements" component={Achievements} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/highlights" component={CareerHighlights} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
