import React from "react";
import { Link } from "react-router-dom";

export default function Label({ text }) {
  return <span className="label">
    <Link to="/">{text}</Link>
  </span>;
}
