import React, { useEffect, useState, useRef } from "react";
import CardContainerSearchBar from "./CardContainerSearchBar";
import CardLocal from "./CardLocal";
import { useNavigate } from "react-router-dom";
import apiClient from "../clients/apiClient";

export default function CardContainer({ collapsed }) {
  const [errorFileList, setErrorFileList] = useState([]);
  
  const requestMade = useRef(false);
  // console.log("Error Files List " + errorFileList.length);

  window.addEventListener("resize", () => {
    const items = document.querySelectorAll(".card-local");
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      item.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
    });
    setTimeout(() => {
      for (let item of items) {
        item.style.transform = "";
      }
    }, 500);
  });

const fetchErrorFiles = async () => {
  if (!requestMade.current) {
    requestMade.current = true; // Mark the request as made
    try {
      const temp = await apiClient.get("http://localhost:8080/errors", {
        withCredentials: true,
      });
      if (temp && temp.data) {
        setErrorFileList(temp.data);
      }
    } catch (error) {
      console.error("Error fetching error files:", error);
    }
  }
};

useEffect(() => {
  fetchErrorFiles();
}, []);


  const navigate = useNavigate();

  const viewErrorCard = (index) => {
    console.log("Hi");

    navigate("/viewErrorFile", { state: index });
  };

  return (
    <div className={`card-container ${collapsed ? "collapsed" : ""}`}>
      <CardContainerSearchBar />
      <div className="card-container-flexbox mb-3">
        {Object.values(errorFileList).map((item) => {
          return (
            <div className="card-item" onClick={() => viewErrorCard(item.id)}>
              <CardLocal
                onClick={() => viewErrorCard(item.id)}
                key={item.id}
                title={item.errorTitle}
                subtitle={item.problemDescription}
                body={item.solutionText}
                labels={item.labels}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
