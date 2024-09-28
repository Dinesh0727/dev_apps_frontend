import React from "react";

export default function ImageLinkContainer({ imageList }) {
  return (
    <div className="image-link-container">
      {imageList.map((element, index) => {
        const link = "https://" + element.getLink();
        return (
          <span key={index} className="image-link-entry">
            <a href={link} target="_blank">
              {element.getText()}
            </a>
          </span>
        );
      })}
    </div>
  );
}
