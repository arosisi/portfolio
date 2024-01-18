import React from "react";

export default function Button({ text, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled} className={disabled ? "" : "text-blue-700 hover:font-bold"}>
      {text}
    </button>
  );
}
