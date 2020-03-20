import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

import About from "./components/About/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const styles = {
  appBar: {
    boxShadow: "none"
  },
  name: {
    fontSize: 40,
    fontWeight: "bold"
  },
  tabs: {
    margin: "0 auto"
  },
  content: {
    marginTop: 50,
    padding: "0 40px",
    display: "flex",
    justifyContent: "center"
  }
};

class App extends React.Component {
  state = { value: "about" };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <AppBar
          className={classes.appBar}
          color='transparent'
          position='relative'
        >
          <Toolbar>
            <Tabs
              className={classes.tabs}
              value={value}
              onChange={(event, value) => this.setState({ value })}
            >
              <Tab label='About' value='about' />
              <Tab label='Portfolio' value='portfolio' />
              <Tab label='Contact' value='contact' />
            </Tabs>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          {value === "about" && <About />}
          {value === "portfolio" && <Portfolio />}
          {value === "contact" && <Contact />}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
