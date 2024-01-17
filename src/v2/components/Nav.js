import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isPathActive = (path) => path === pathname;

  return (
    <div className="my-8 flex justify-end">
      <span
        onClick={() => navigate("/v2")}
        className={`mr-4 cursor-pointer text-blue-700 hover:underline ${isPathActive("/v2") ? "font-bold" : ""}`}
      >
        About
      </span>
      <span
        onClick={() => navigate("/v2/stuff")}
        className={`mr-4 cursor-pointer text-blue-700 hover:underline ${isPathActive("/v2/stuff") ? "font-bold" : ""}`}
      >
        Stuff
      </span>
      <span
        onClick={() => navigate("/v2/contact")}
        className={`cursor-pointer text-blue-700 hover:underline ${isPathActive("/v2/contact") ? "font-bold" : ""}`}
      >
        Contact
      </span>
    </div>
  );
}
