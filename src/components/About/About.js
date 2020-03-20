import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";
import Skills from "./Skills";

const styles = {
  root: {
    "& > *": {
      marginBottom: 50
    }
  }
};

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Intro />
        <Skills />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default withStyles(styles)(About);
