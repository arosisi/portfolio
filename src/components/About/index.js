import React from "react";
import { Helmet } from "react-helmet";
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
        <Helmet>
          <title>Portfolio</title>
          <meta name='description' content="arosisi (Tom Nguyen)'s portfolio" />
        </Helmet>

        <Intro />
        <Skills />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default withStyles(styles)(About);
