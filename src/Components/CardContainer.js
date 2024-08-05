import React from "react";
import CardLocal from "./CardLocal";
import CardContainerSearchBar from "./CardContainerSearchBar";

export default function CardContainer({ collapsed }) {
  return (
    <div className="card-container">
      <CardContainerSearchBar />
      <div className={`${collapsed ? "cardContainerCollapsed" : "cardContainerNotCollapsed"}`}>
        <div className="card-container-flexbox mb-3">
          <CardLocal title="Card" subtitle="Card subtitle" body="Some quick example text to build on the card title and make up
                the bulk of the card's content." />
          <CardLocal title="Card" subtitle="Card subtitle" body="Some quick example text to build on the card title and make up
                the bulk of the card's content. " />
          <CardLocal title="Card" subtitle="Card subtitle" body="Some quick example text to build on the card title and make up
                the bulk of the card's content. " />
          <CardLocal title="Card" subtitle="Card subtitle" body="Some quick example text to build on the card title and make up
                the bulk of the card's content. " />
        </div>

        <div className="card-container-flexbox mb-3">
          <CardLocal title="Card" subtitle="Card subtitle" body="Some quick example text to build on the card title and make up
                the bulk of the card's content. " />
          <CardLocal title="Card" subtitle="Card subtitle" body="Some quick example text to build on the card title and make up
                the bulk of the card's content. " />
          <CardLocal title="Card" subtitle="Card subtitle" body="Some quick example text to build on the card title and make up
                the bulk of the card's content. " />
          <CardLocal title="Card" subtitle="Card subtitle" body="Some quick example text to build on the card title and make up
                the bulk of the card's content. " />
        </div>

        

        

        
        
      </div>
    </div>
  );
}
