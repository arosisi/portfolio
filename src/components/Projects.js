import React from "react";
import { Helmet } from "react-helmet";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  link: {
    textDecoration: "none"
  },
  card: {
    maxWidth: 345
  },
  content: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: 16
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10
  }
};

class Projects extends React.Component {
  renderProject = ({ href, src, project, description }) => {
    const { classes } = this.props;
    return (
      <Grid item xs={12} className={classes.container}>
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={classes.link}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia component='img' image={src} alt={project} />
              <CardContent className={classes.content}>
                <div className={classes.title}>{project}</div>
                <div>{description}</div>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      </Grid>
    );
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Projects</title>
          <meta name='description' content="arosisi (Tom Nguyen)'s projects" />
        </Helmet>

        <Grid container spacing={3}>
          {this.renderProject({
            href: "https://arosisi.github.io/tower-of-hanoi",
            src: `${process.env.PUBLIC_URL}/images/tower-of-hanoi.jpg`,
            project: "Tower of Hanoi",
            description:
              "A game where the player has to move a stack of disks from one column to another"
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
