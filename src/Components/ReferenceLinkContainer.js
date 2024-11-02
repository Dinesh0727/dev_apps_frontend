import React from "react";

export default function ReferenceLinkContainer({ referenceLinkList }) {
  return (
    <div className="reference-link-container">
      {referenceLinkList.map((element, index) => {
        return (
          <div
            key={index}
            className="reference-link-entry"
          >
            <a href={element} target="_blank">{element}</a>
          </div>
        );
      })}
    </div>
  );
}
