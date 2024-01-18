import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Nav from "./Nav";
import Link from "./common/Link";

export default function About() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/v2") {
      navigate("/v2");
    }
  }, [pathname, navigate]);

  return (
    <div className="container mb-8 max-w-4xl px-8 font-typewriter">
      <Nav />
      <p className="mb-4">Hello there!</p>
      <p className="mb-2">
        Welcome to my little space on the Internet, where I keep my <Link pathname="/v2/stuff" text="digital stuff" />.
      </p>
      <p className="mb-2">
        If you're here from <Link href="https://github.com/arosisi" text="GitHub" /> or{" "}
        <Link href="https://www.linkedin.com/in/tom-nguyen-76a84922" text="LinkedIn" />, I'm getting noticed and you
        probably know a little bit about myself. If not (how did you find me?), I'm Tom Nguyen, a software developer at
        Amazon based in Vancouver Canada.
      </p>
      <p className="mb-2">
        Conventional wisdom dictates that (or at least I think it does) a space like this should only be about my
        professional background and potential, so that I can land a good job or gig, but while being an introvert, I do
        have a tendency to sometimes overshare about myself, so I may add personal stuff here in the future.
      </p>
      <p>So, my professional background (with links to lesser-known entities):</p>
      <ul className="mb-2 list-inside list-disc">
        <li>Software Development Engineer II at Amazon (Canada) from Jul 2023</li>
        <li>Software Development Engineer I at Amazon (Canada) from Mar 2021 to Jul 2023</li>
        <li>Software Development Engineer Intern at Amazon (Canada) from Jun to Aug 2020, Sep to Dec 2019</li>
        <li>
          Software Engineer (Co-op) at <Link href="https://www.tutorocean.com" text="TutorOcean" /> (Canada) from May to
          Aug 2019
        </li>
        <li>
          Math Tutor at <Link href="https://www.sa.edu.sg" text="Stalford Academy" /> (Singapore) from Jan 2012 to Jul
          2018
        </li>
        <li>School Teacher for the Ministry of Education (Singapore) from Jan to Apr 2011</li>
      </ul>
      <p>My formal education:</p>
      <ul className="mb-4 list-inside list-disc">
        <li>MS in Computer Science from Carleton University (Canada) in 2020</li>
        <li>BS in Mathematics from Singapore University of Social Sciences (Singapore) in 2017</li>
        <li>BA in Psychology from Nanyang Technological University (Singapore) in 2010</li>
      </ul>
      <p className="mb-4">
        That's about it for an introduction. Come take a look at my <Link pathname="/v2/stuff" text="digital stuff" />.
      </p>
      <p>
        P.S. If you'd like to see pictures, visit my <Link href="https://arosisi.github.io/portfolio" text="v1 page" />{" "}
        (I may not keep it up-to-date though). I've grown to prefer less flashy things, hence this current version of my
        page.
      </p>
    </div>
  );
}
