import React from "react";
import "../styles/ViewError.css";
import Editor from "./Editor";

export default function ViewError({ errorFile }) {
  console.log(errorFile);

  return (
    <div className="viewError">
      <h4 className="error-title-heading">Error Title</h4>
      <div className="error-title-view-content">{errorFile.heading}</div>
      <h4 className="project-name-heading">Project Name</h4>
      <div className="project-name-view-content">{errorFile.projectName}</div>
      <h4 className="problem-description-heading">Problem Description</h4>
      <div className="problem-description-view-content">
        {errorFile.problemDescription}
      </div>
      <h4 className="solution-text-heading">Solution Text</h4>
      <div className="solution-text-view-content">{errorFile.solutionText}</div>
      {
        errorFile.codeBlockBeforeFix && 
        <>
          <h4 className="before-code-fix-view-heading">Code Before Fix</h4>
          <div className="before-code-fix-view-content">
            <Editor
              value={errorFile.codeBlockBeforeFix}
              toolBarVisibility={false}
              readOnly={true}
            ></Editor>
          </div>
        </>
      }
      {
        errorFile.codeBlockAfterFix && 
        <>
          <h4 className="after-code-fix-view-heading">Code After Fix</h4>
          <div className="after-code-fix-view-content">
            <Editor
              value={errorFile.codeBlockAfterFix}
              toolBarVisibility={false}
              readOnly={true}
            ></Editor>
          </div>
        </>
      }
      <h4 className="image-list-view-heading">Relevant Image List</h4>
      <div className="image-list-view-content">
        {errorFile.imageLinkList.map((imageLinkElement) => {
          return (
            <>
              <a href={imageLinkElement.link} className="image-link-view-text">
                {imageLinkElement.text}
              </a>
            </>
          );
        })}
      </div>

      <h4 className="reference-list-view-heading">References List</h4>
      <div className="reference-list-view-content">
        {errorFile.referenceLinks.map((link) => {
          return (
            <>
              <div className="reference-link-view-element">
                <a href={link}>
                  {link}
                </a>
              </div>
            </>
          );
        })}
      </div>

      <h4 className="labels-view-heading">Labels</h4>
      <div className="labels-view-content">
        {errorFile.labels.map((label) => {
          return (
            <>
              <span className="labels-view-element">
                {label}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
}