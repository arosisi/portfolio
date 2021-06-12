import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  experience: {
    "& > *": {
      marginBottom: 10
    }
  },
  card: {
    display: "flex",
    maxWidth: 550
  },
  logo: {
    minWidth: 50,
    height: 50,
    borderRadius: 2,
    margin: 10
  },
  info: {
    display: "flex",
    flexDirection: "column",
    margin: "8px 15px 15px 15px"
  },
  link: {
    color: "inherit"
  }
};

class Experience extends React.Component {
  renderExperience = ({ src, href, company, title, time }) => {
    const { classes } = this.props;
    return (
      <Card variant='outlined' className={classes.card}>
        <img className={classes.logo} src={src} alt={company} />
        <div className={classes.info}>
          <div>
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className={classes.link}
            >
              <strong>{company}</strong>
            </a>
          </div>
          <div>{title}</div>
          <div>{time}</div>
        </div>
      </Card>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>Experience</h2>
        <div className={classes.experience}>
          {this.renderExperience({
            src: `${process.env.PUBLIC_URL}/images/Amazon.png`,
            href: "https://www.amazon.ca",
            company: "Amazon",
            title: "Software Development Engineer I",
            time: "Since March 2021"
          })}
          {this.renderExperience({
            src: `${process.env.PUBLIC_URL}/images/Amazon.png`,
            href: "https://www.amazon.ca",
            company: "Amazon",
            title: "Software Development Engineer Intern",
            time: "June 2020 - August 2020, September 2019 - December 2019"
          })}
          {this.renderExperience({
            src: `${process.env.PUBLIC_URL}/images/TutorOcean.png`,
            href: "https://www.tutorocean.com",
            company: "TutorOcean",
            title: "Software Engineer (Co-op)",
            time: "May 2019 - August 2019"
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Experience);
