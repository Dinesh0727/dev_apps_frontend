import React from "react";
import "../styles/ViewError.css";
import Editor from "./Editor";

export default function ViewError({ errorFile }) {
  return (
    <div className="viewError">
      <div className="error-title-view">{errorFile.heading}</div>
      <div className="error-title-view">{errorFile.projectName}</div>
      <div className="error-title-view">{errorFile.problemDescription}</div>
      <div className="error-title-view">{errorFile.solutionText}</div>
      <div className="beforeFixText">
        <Editor
          value={errorFile.codeBlockBeforeFix}
          toolBarVisibility={false}
        ></Editor>
      </div>
    </div>
  );
}
