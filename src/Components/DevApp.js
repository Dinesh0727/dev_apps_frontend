import React from "react";
import ErrorVault from "./ErrorVault";
import DevNotes from "./DevNotes";

export default function DevApp() {
  return (
    <div>
      <div id="errorVault">
        <ErrorVault />
      </div>
      <div id="devNotes">
        <DevNotes />
      </div>
    </div>
  );
}
