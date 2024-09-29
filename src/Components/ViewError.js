import React from "react";
import "../styles/ViewError.css";
import Editor from "./Editor";

export default function ViewError({ errorFile }) {
  return (
    <div className="viewError">
      <div>
        <h2>Error</h2>
      </div>
      <div className="error-title-view">{errorFile.heading}</div>
      <div>
        <h3>Project</h3>
      </div>
      <div className="error-title-view">{errorFile.projectName}</div>
      <div>
        <h3>Problem Description</h3>
      </div>
      <div className="error-title-view">{errorFile.problemDescription}</div>
      <div>
        <h3>Solution Text</h3>
      </div>
      <div className="error-title-view">{errorFile.solutionText}</div>
      {errorFile.codeBlockBeforeFix && (
        <>
          <div>
            <h3>Code Before Fix</h3>
          </div>
          <div className="beforeFixText">
            <Editor
              readOnly={true}
              value={errorFile.codeBlockBeforeFix}
              toolBarVisibility={false}
            ></Editor>
          </div>
        </>
      )}
      {errorFile.codeBlockAfterFix && (
        <>
          <div>
            <h3>Code After Fix</h3>
          </div>
          <div className="beforeFixText">
            <Editor
              readOnly={true}
              value={errorFile.codeBlockAfterFix}
              toolBarVisibility={false}
            ></Editor>
          </div>
        </>
      )}
      <div>
        <h3>Image Link List</h3>
      </div>
      {errorFile.imageLinkList.map((item, index) => {
        return (
          <div className="image-link-element">
            <div key={index}>{item.link}</div>
            <div key={index + 100000}>{item.text}</div>
          </div>
        );
      })}
      <div>
        <h3>References</h3>
      </div>
      {errorFile.referenceLinks.map((item, index) => {
        return (
          <div className="reference-link-element" key={index + 200000}>
            <a href={item} className="reference-link">
              {item}
            </a>
          </div>
        );
      })}
      <div>
        <h3>Labels</h3>
      </div>
      <div className="error-title-view">
        {errorFile.labels.map((item, index) => {
          return (
            <span key={index + 300000} className="">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
