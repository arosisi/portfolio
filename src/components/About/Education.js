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
            src:
              "https://media-exp1.licdn.com/dms/image/C4E0BAQH8Hd0st7TvEg/company-logo_200_200/0?e=2159024400&v=beta&t=xVdZbgkj4jh87SPVN4zhYZce-P_hk7GsJvvW0HgZ6WU",
            href: "http://www.carleton.ca",
            university: "Carleton University",
            degree: "Master of Computer Science",
            time: "September 2018 - December 2020"
          })}
          {this.renderEducation({
            src:
              "https://media-exp1.licdn.com/dms/image/C4D0BAQFGzzcYtpkcnA/company-logo_200_200/0?e=2159024400&v=beta&t=D75FGSEkOCwrcxe6UNYrbVQvuuxW0PxzPYWZnyHNgM0",
            href: "http://www.suss.edu.sg",
            university: "Singapore University of Social Sciences",
            degree: "Bachelor of Science in Mathematics",
            time: "July 2014 - November 2017"
          })}
          {this.renderEducation({
            src:
              "https://media-exp1.licdn.com/dms/image/C4D0BAQG0nfM0ZH4emA/company-logo_200_200/0?e=2159024400&v=beta&t=md0Sym_ZNd-WwmfiZNEXONIJ70Iue97frCHLbr65KQA",
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
