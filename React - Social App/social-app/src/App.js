import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { theme } from "./config/theme";
import { AppRoutes } from "./AppRoutes";
import { MainContent, AppBar } from "./components/Layout";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <AppBar />
          <MainContent>
            <AppRoutes />
          </MainContent>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
