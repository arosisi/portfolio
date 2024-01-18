import React from "react";
import { Helmet } from "react-helmet";

import Nav from "../Nav";
import WebApps from "./WebApps";
import Writings from "./Writings";

export default function Stuff() {
  return (
    <div className="container mb-8 max-w-4xl px-8 font-typewriter">
      <Helmet>
        <title>Stuff</title>
        <meta name="description" content="arosisi (Tom Nguyen)'s digital stuff" />
      </Helmet>

      <Nav />

      <div className="space-y-8">
        <WebApps />
        <Writings />
      </div>
    </div>
  );
}
