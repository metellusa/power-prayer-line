import React from "react";

export default function Surface({ children, className = "" }) {
  return <section className={["surface", className].join(" ")}>{children}</section>;
}
