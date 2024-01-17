import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AboutV2 from "./v2/components/About";
import ContactV2 from "./v2/components/Contact";
import Stuff from "./v2/components/Stuff";

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
  },
};

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/v2" element={<AboutV2 />} />
          <Route path="/v2/stuff" element={<Stuff />} />
          <Route path="/v2/contact" element={<ContactV2 />} />

          <Route path="/v2/*" element={<AboutV2 />} />
          <Route path="/*" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default withStyles(styles)(App);
