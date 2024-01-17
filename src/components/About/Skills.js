import { withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = {
  category: {
    marginBottom: 5,
  },
};

class Skills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>Skills</h2>
        <h4 className={classes.category}>Languages & Frameworks</h4>
        JavaScript, Java, React, Angular, Node.js, Express.js
        <h4 className={classes.category}>Databases</h4>
        MongoDB, PostgreSQL
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
