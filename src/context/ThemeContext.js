import React, { createContext, useContext, useState, useEffect } from "react";

export const themes = {
  crimsonNight: {
    id: "crimsonNight",
    name: "Crimson Night",
    swatch: "#e05a47",
    vars: {
      "--navbar-bg": "#19191a",
      "--drawer-bg": "#551111",
      "--page-bg": "#223344",
      "--card-bg": "#2b2b2b",
      "--card-bg-alt": "#444444",
      "--accent": "#e05a47",
      "--secondary": "#d2b48c",
      "--primary-text": "#ffffff",
      "--on-accent": "#ffffff",
      "--footer-bg": "#222222",
    },
    bodyBg: null,
  },
  oceanDepth: {
    id: "oceanDepth",
    name: "Ocean Depth",
    swatch: "#64ffda",
    vars: {
      "--navbar-bg": "#0a192f",
      "--drawer-bg": "#112240",
      "--page-bg": "#0d2137",
      "--card-bg": "#112240",
      "--card-bg-alt": "#1e3a5f",
      "--accent": "#64ffda",
      "--secondary": "#8892b0",
      "--primary-text": "#ccd6f6",
      "--on-accent": "#071526",
      "--footer-bg": "#071526",
    },
    bodyBg: null,
  },
  forestDusk: {
    id: "forestDusk",
    name: "Forest Dusk",
    swatch: "#ffd700",
    vars: {
      "--navbar-bg": "#1a2e1a",
      "--drawer-bg": "#0d1f0d",
      "--page-bg": "#162716",
      "--card-bg": "#1e3a1e",
      "--card-bg-alt": "#2a4a2a",
      "--accent": "#ffd700",
      "--secondary": "#98c379",
      "--primary-text": "#e8f5e8",
      "--on-accent": "#1a1500",
      "--footer-bg": "#0a180a",
    },
    bodyBg: null,
  },
  midnightOrchid: {
    id: "midnightOrchid",
    name: "Midnight Orchid",
    swatch: "#c084fc",
    vars: {
      "--navbar-bg": "#1a0a2e",
      "--drawer-bg": "#2d1b4e",
      "--page-bg": "#1e1035",
      "--card-bg": "#2d1b4e",
      "--card-bg-alt": "#3d2b5e",
      "--accent": "#c084fc",
      "--secondary": "#e879f9",
      "--primary-text": "#f3e8ff",
      "--on-accent": "#120822",
      "--footer-bg": "#120822",
    },
    bodyBg: null,
  },
  slatePro: {
    id: "slatePro",
    name: "Slate Pro",
    swatch: "#7aa2f7",
    vars: {
      "--navbar-bg": "#1e2030",
      "--drawer-bg": "#24283b",
      "--page-bg": "#1a1b26",
      "--card-bg": "#24283b",
      "--card-bg-alt": "#2f334d",
      "--accent": "#7aa2f7",
      "--secondary": "#bb9af7",
      "--primary-text": "#c0caf5",
      "--on-accent": "#16161e",
      "--footer-bg": "#16161e",
    },
    bodyBg: null,
  },
};

const PortfolioThemeContext = createContext(null);

export const PortfolioThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(
    () => localStorage.getItem("portfolioTheme") || "crimsonNight"
  );

  const activeTheme = themes[themeId] || themes.crimsonNight;

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(activeTheme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [activeTheme]);

  const selectTheme = (id) => {
    localStorage.setItem("portfolioTheme", id);
    setThemeId(id);
  };

  return (
    <PortfolioThemeContext.Provider value={{ activeTheme, selectTheme, themes }}>
      {children}
    </PortfolioThemeContext.Provider>
  );
};

export const usePortfolioTheme = () => useContext(PortfolioThemeContext);
