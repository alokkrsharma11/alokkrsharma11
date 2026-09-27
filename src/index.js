import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { PortfolioThemeProvider } from "./context/ThemeContext";

ReactDOM.render(
  <PortfolioThemeProvider>
    <Router>
      <App />
    </Router>
  </PortfolioThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
