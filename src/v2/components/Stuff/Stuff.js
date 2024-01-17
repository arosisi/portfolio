import React from "react";

import Nav from "../Nav";
import WebApps from "./WebApps";
import Writings from "./Writings";

export default function Stuff() {
  return (
    <div className="container mb-8 px-8 font-typewriter">
      <Nav />
      <div className="space-y-8">
        <WebApps />
        <Writings />
      </div>
    </div>
  );
}
