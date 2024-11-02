import React from "react";

export default function LabelContainer({ labelList }) {
  return (
    <div className="label-container">
      {labelList.map((element, index) => {
        return (
          <span key={index} className="label-entry">
            {element}
          </span>
        );
      })}
    </div>
  );
}
