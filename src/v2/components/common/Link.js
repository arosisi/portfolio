import React from "react";
import { useNavigate } from "react-router-dom";

export default function Link({ href, pathname, text }) {
  const navigate = useNavigate();

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
        {text}
      </a>
    );
  }

  if (pathname) {
    return (
      <span onClick={() => navigate(pathname)} className="cursor-pointer text-blue-700 hover:underline">
        {text}
      </span>
    );
  }
}
