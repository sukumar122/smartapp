import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import theme from "./theme";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>

    </ThemeProvider>
  );
}

export default App;
