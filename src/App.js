import { styled } from "@mui/material/styles";
import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AboutV2 from "./v2/pages/About";
import ContactV2 from "./v2/pages/Contact";
import ProjectsV2 from "./v2/pages/Projects";
import Writings from "./v2/pages/Writings";

const ContentDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
});

function App() {
  return (
    <ContentDiv>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/v2" element={<AboutV2 />} />
        <Route path="/v2/projects" element={<ProjectsV2 />} />
        <Route path="/v2/writings" element={<Writings />} />
        <Route path="/v2/contact" element={<ContactV2 />} />

        <Route path="/v2/*" element={<AboutV2 />} />
        <Route path="/*" element={<About />} />
      </Routes>
    </ContentDiv>
  );
}

export default App;
