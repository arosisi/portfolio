import React from "react";
import ContentPage from "../components/ContentPage";
import Nav from "../components/Nav";

export default function Projects() {
  return (
    <div className="container mb-8 max-w-4xl px-8 font-typewriter">
      <Nav />
      <ContentPage contentPath="/content/pages/projects.md" />
    </div>
  );
}
