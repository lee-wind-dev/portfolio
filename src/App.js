import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import "./styles/style.css";
import { darkTheme, lightTheme } from "./styles/theme";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import CustomLoading from "./components/CustomLoading";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";

const App = () => {
  const { theme } = useSelector((state) => state.ui);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Helmet>
          <title>LeeWind | Portfolio</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <CustomLoading isLoading={isLoading} />
        <div className="App" id={isLoading ? "no-scroll" : "scroll"}>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/project" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
