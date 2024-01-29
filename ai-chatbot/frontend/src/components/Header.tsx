import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#E7FEFD"
                to="/chat"
                text="Start Your Story"
                textColor="black"
              />
              <NavigationLink
                bg="#00AAA9"
                to="/"
                text="Logout"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
             <NavigationLink
                bg="#E7FEFD"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavigationLink
                bg="#00AAA9"
                to="/signup"
                text="Signup"
                textColor="white"
              /></>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
