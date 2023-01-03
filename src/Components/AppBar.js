import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginPage from "../Pages/LoginPage";

export default function ButtonAppBar() {
  const [showLogin, setShowLogin] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Good Books
          </Typography>
          <Button color="inherit" onClick={() => setShowLogin(true)}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {showLogin && <LoginPage />}
    </Box>
  );
}
