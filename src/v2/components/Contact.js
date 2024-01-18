import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";

import privateInfo from "../../privateInfo";
import Nav from "./Nav";
import Button from "./common/Button";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const captchaRef = useRef();

  const validateEmail = () => {
    const emailInvalid = !!email && !new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "g").test(email);
    setEmailInvalid(emailInvalid);
  };

  const submit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const captchaResponseEl = document.getElementById("g-recaptcha-response");

      const response = await fetch(privateInfo.form_endpoint, {
        method: "POST",
        body: JSON.stringify({ email, message, "g-recaptcha-response": captchaResponseEl.value }),
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setEmail("");
        setMessage("");
        captchaRef.current.reset();
        setSubmitStatus({ message: "Submission succeeded!" });
      } else {
        throw new Error((await response.json()).error || "Unknown error from FormSpree!");
      }
    } catch (error) {
      setSubmitStatus({ errored: true, message: `${error.name}: ${error.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mb-8 max-w-4xl px-8 font-typewriter">
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact arosisi (Tom Nguyen)" />
      </Helmet>

      <Nav />

      <div className="container mx-auto flex max-w-96 flex-col space-y-4">
        <div>
          <label htmlFor="email">Email*</label>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              id="email"
              autoComplete="off"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={validateEmail}
              className="px-2"
            />
            {emailInvalid && <p className="text-red-600">Common, give me a proper-looking email!</p>}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            rows={8}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="px-2"
          />
        </div>

        <ReCAPTCHA
          ref={captchaRef}
          sitekey={privateInfo.captcha_sitekey}
          asyncScriptOnLoad={() => setCaptchaLoaded(true)}
          onChange={() => setCaptchaVerified(true)}
          onExpired={() => setCaptchaVerified(false)}
        />

        <div className="mr-2 self-end">
          <Button
            text="Submit"
            disabled={!email || emailInvalid || !message || !captchaLoaded || !captchaVerified || isSubmitting}
            onClick={submit}
          />
        </div>
        {isSubmitting && <p>Submitting...</p>}
        {submitStatus && (
          <p className={submitStatus.errored ? "text-red-600" : "text-green-600"}>{submitStatus.message}</p>
        )}
      </div>
    </div>
  );
}
