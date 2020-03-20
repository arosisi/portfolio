import React from "react";
import { withRouter } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  appBar: {
    boxShadow: "none"
  },
  tabs: {
    margin: "0 auto"
  }
};

class NarBar extends React.Component {
  render() {
    const { classes, history } = this.props;
    const page = history.location.pathname.slice(1);
    return (
      <AppBar
        className={classes.appBar}
        color='transparent'
        position='relative'
      >
        <Toolbar>
          <Tabs
            className={classes.tabs}
            value={page}
            onChange={(event, page) => {
              history.push(`${page}`);
            }}
          >
            <Tab label='About' value='' />
            <Tab label='Projects' value='projects' />
            <Tab label='Contact' value='contact' />
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(NarBar));
