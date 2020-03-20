import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  inputs: {
    "& > *": {
      marginBottom: 20
    }
  },
  button: {
    float: "right"
  }
};

class Contact extends React.Component {
  state = { nameError: false, emailError: false, messageError: false };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    let nameError = !name;
    let emailError = !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    let messageError = !message;
    if (nameError || emailError || messageError) {
      this.setState({ nameError, emailError, messageError });
    } else {
      // TODO
    }
  };

  render() {
    const { classes } = this.props;
    const { nameError, emailError, messageError } = this.state;
    return (
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={this.handleSubmit}
      >
        <div className={classes.inputs}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            name='name'
            label='Name'
            autoFocus
            error={nameError}
            helperText={nameError ? "Name cannot be blank" : ""}
            onChange={() => this.setState({ nameError: false })}
          />
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            name='email'
            label='Email'
            error={emailError}
            helperText={emailError ? "Invalid email format" : ""}
            onChange={() => this.setState({ emailError: false })}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            InputLabelProps={{
              shrink: true
            }}
            name='message'
            label='Message'
            error={messageError}
            helperText={messageError ? "Message cannot be blank" : ""}
            onChange={() => this.setState({ messageError: false })}
          />
          <Button type='submit' className={classes.button}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(Contact);
