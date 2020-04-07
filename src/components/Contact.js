import React from "react";
import { Helmet } from "react-helmet";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import { ReCaptcha, loadReCaptcha } from "react-recaptcha-google";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    maxWidth: 350
  },
  inputs: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginBottom: 20
    }
  },
  captchaError: {
    color: "#f44336",
    fontSize: 12
  },
  submit: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end"
  },
  submitError: {
    color: "#f44336"
  }
};

class Contact extends React.Component {
  state = {
    captchaLoaded: false,
    captchaVerified: false,
    nameError: false,
    emailError: false,
    messageError: false,
    captchaError: false,
    submitting: false,
    status: ""
  };

  componentDidMount() {
    loadReCaptcha();
  }

  handleSubmit = event => {
    event.preventDefault();

    const { captchaLoaded, captchaVerified } = this.state;
    let captchaError = !captchaLoaded || !captchaVerified;

    const form = event.target;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    let nameError = !name;
    let emailError = !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    let messageError = !message;

    if (nameError || emailError || messageError || captchaError) {
      this.setState({ nameError, emailError, messageError, captchaError });
    } else {
      this.setState({ submitting: true }, () => {
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ submitting: false, status: "SUCCESS" });
          } else {
            this.setState({ submitting: false, status: "ERROR" });
          }
        };
        xhr.send(data);
      });
    }
  };

  render() {
    const { classes } = this.props;
    const {
      nameError,
      emailError,
      messageError,
      captchaError,
      submitting,
      status
    } = this.state;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Contact</title>
          <meta name='description' content='Contact arosisi (Tom Nguyen)' />
        </Helmet>

        <form
          noValidate
          autoComplete='off'
          onSubmit={this.handleSubmit}
          action='https://formspree.io/moqlndod'
          method='POST'
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
              onChange={() => this.setState({ nameError: false, status: "" })}
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
              onChange={() => this.setState({ emailError: false, status: "" })}
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
              onChange={() =>
                this.setState({ messageError: false, status: "" })
              }
            />
          </div>

          <ReCaptcha
            render='explicit'
            sitekey='6LcLYecUAAAAAJXiz98dtjhRbek8Nu96rOemOv7Y'
            onloadCallback={() => this.setState({ captchaLoaded: true })}
            verifyCallback={() =>
              this.setState({ captchaVerified: true, captchaError: false })
            }
            expiredCallback={() => this.setState({ captchaVerified: false })}
          />
          {captchaError && (
            <div className={classes.captchaError}>Captcha is required</div>
          )}

          <br />

          <div className={classes.submit}>
            {status === "SUCCESS" ? (
              <p>Submitted!</p>
            ) : submitting ? (
              <CircularProgress />
            ) : (
              <Button type='submit'>Submit</Button>
            )}
            {status === "ERROR" && (
              <p className={classes.submitError}>Ooops! There was an error.</p>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
