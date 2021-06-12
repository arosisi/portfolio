import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    marginRight: 40
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 140,
    marginTop: 10
  },
  name: {
    marginTop: 0,
    marginBottom: 10
  },
  links: {
    display: "flex",
    marginTop: 20
  },
  link: {
    marginRight: 10,
    color: "inherit"
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
          src={`${process.env.PUBLIC_URL}/images/profile-picture.jpg`}
          alt='Profile'
        />
        <div className={classes.content}>
          <h2 className={classes.name}>Tom Nguyen</h2>
          <div>Web developer</div>
          <div>Based in Vancouver, Canada</div>
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
