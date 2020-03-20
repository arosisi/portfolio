import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex"
  },
  name: {
    margin: 0
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 150,
    marginLeft: 40
  },
  links: {
    display: "flex",
    marginTop: 20
  },
  link: {
    marginRight: 10,
    color: "inherit"
  },
  picture: {
    width: 150,
    minHeight: 150,
    borderRadius: "50%"
  }
};

class Intro extends React.Component {
  renderIcon = ({ href, icon }) => {
    const { classes } = this.props;
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={classes.link}
      >
        {icon}
      </a>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img
          className={classes.picture}
          src='https://drive.google.com/uc?export=download&id=1TptIirtRFmSifpECwqtDUAF0a5-pf2iG'
          alt='Profile'
        />
        <div className={classes.content}>
          <h1 className={classes.name}>Tom Nguyen</h1>
          <div>Web developer</div>
          <div> Masters student in Computer Science</div>
          <div> Based in Ottawa, Canada</div>
          <div className={classes.links}>
            {this.renderIcon({
              href: "https://github.com/arosisi",
              icon: <GitHub fontSize='small' />
            })}
            {this.renderIcon({
              href: "https://www.linkedin.com/in/tom-nguyen-76a84922",
              icon: <LinkedIn />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Intro);
