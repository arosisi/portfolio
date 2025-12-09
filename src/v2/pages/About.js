import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ContentPage from "../components/ContentPage";
import Nav from "../components/Nav";

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
      <ContentPage contentPath="/content/pages/about.md" />
    </div>
  );
}
