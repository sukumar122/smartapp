import React from "react";
import {AppBar, Toolbar, Typography, Box, Container, Button, Stack,} from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* Top Navbar */}
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Data Space</Typography>

          {/* Navbar Buttons */}
          <Stack direction="row" spacing={2}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>

            <Button color="inherit" component={Link} to="/about">
              About
            </Button>

            <Button color="inherit">Login</Button>
            <Button color="inherit" variant="outlined">
              Signup
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Welcome To Data Space 🚀
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Primary</Button>
            <Button variant="outlined">Secondary</Button>
            <Button variant="text">Text</Button>
          </Stack>

          <Box sx={{ mt: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
