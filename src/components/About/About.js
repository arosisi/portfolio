import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

import NavBar from "../NavBar";
import Education from "./Education";
import Experience from "./Experience";
import Intro from "./Intro";

export default function About() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/") {
      navigate("/");
    }
  }, [pathname, navigate]);

  return (
    <div>
      <NavBar />
      <div className="mt-12 space-y-8 px-8">
        <Helmet>
          <title>Portfolio</title>
          <meta name="description" content="arosisi (Tom Nguyen)'s portfolio" />
        </Helmet>

        <Intro />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
