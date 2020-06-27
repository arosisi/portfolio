import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  education: {
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

class Education extends React.Component {
  renderEducation = ({ src, href, university, degree, time }) => {
    const { classes } = this.props;
    return (
      <Card variant='outlined' className={classes.card}>
        <img className={classes.logo} src={src} alt={university} />
        <div className={classes.info}>
          <div>
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className={classes.link}
            >
              <strong>{university}</strong>
            </a>
          </div>
          <div>{degree}</div>
          <div>{time}</div>
        </div>
      </Card>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>Education</h2>
        <div className={classes.education}>
          {this.renderEducation({
            src: `${process.env.PUBLIC_URL}/images/Carleton.png`,
            href: "http://www.carleton.ca",
            university: "Carleton University",
            degree: "Master of Computer Science",
            time: "September 2018 - December 2020"
          })}
          {this.renderEducation({
            src: `${process.env.PUBLIC_URL}/images/SUSS.png`,
            href: "http://www.suss.edu.sg",
            university: "Singapore University of Social Sciences",
            degree: "Bachelor of Science in Mathematics",
            time: "July 2014 - November 2017"
          })}
          {this.renderEducation({
            src: `${process.env.PUBLIC_URL}/images/NTU.png`,
            href: "http://www.ntu.edu.sg",
            university: "Nanyang Technological University",
            degree: "Bachelor of Arts (Honours) in Psychology",
            time: "August 2006 - May 2010"
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Education);
