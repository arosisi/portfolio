import React, { useState } from "react";

import privateInfo from "../../privateInfo";
import Nav from "./Nav";
import Button from "./common/Button";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = () => {
    const emailInvalid = !!email && !new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "g").test(email);
    setEmailInvalid(emailInvalid);
  };

  const submit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const response = await fetch(privateInfo.form_endpoint, {
        method: "POST",
        body: { email, message },
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setEmail("");
        setMessage("");
        setSubmitStatus("Submission succeeded!");
      } else {
        throw new Error((await response.json()).error || "Unknown error from FormSpree!");
      }
    } catch (error) {
      setSubmitStatus(`${error.name}: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mb-8 px-8 font-typewriter">
      <Nav />
      <div className="container mx-auto flex max-w-96 flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email">Email*</label>
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

        <div className="mr-2 self-end">
          <Button text="Submit" disabled={!email || emailInvalid || !message || isSubmitting} onClick={submit} />
        </div>

        {emailInvalid && <p>Common, give me a proper-looking email!</p>}
        {submitStatus && <p>{submitStatus}</p>}
      </div>
    </div>
  );
}
