import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NavItem({ pathname, text }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isPathActive = pathname === location.pathname;

  return (
    <nav
      onClick={() => navigate(pathname)}
      className={`mr-4 cursor-pointer text-blue-700 hover:underline ${isPathActive ? "font-bold" : ""}`}
    >
      {text}
    </nav>
  );
}

export default function Nav() {
  return (
    <div className="my-8 flex justify-end">
      <NavItem pathname="/v2" text="About" />
      <NavItem pathname="/v2/projects" text="Projects" />
      <NavItem pathname="/v2/writings" text="Writings" />
      <NavItem pathname="/v2/contact" text="Contact" />
    </div>
  );
}
