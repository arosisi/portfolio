import React from "react";
import { Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

const styles = {
  content: {
    marginTop: 50,
    padding: "0 40px",
    display: "flex",
    justifyContent: "center"
  }
};

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <div className={classes.content}>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
