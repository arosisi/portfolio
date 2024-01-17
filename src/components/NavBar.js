import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const styles = {
  appBar: {
    boxShadow: "none",
  },
  tabs: {
    margin: "0 auto",
  },
};

export default function NarBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar style={styles.appBar} color="transparent" position="relative">
      <Toolbar>
        <Tabs
          style={styles.tabs}
          value={location.pathname.slice(1)}
          onChange={(event, page) => {
            navigate(`/${page}`);
          }}
        >
          <Tab label="About" value="" />
          <Tab label="Projects" value="projects" />
          <Tab label="Contact" value="contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
