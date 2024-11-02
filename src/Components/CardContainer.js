import React, { useEffect, useState } from "react";
import axios from "axios";
import CardContainerSearchBar from "./CardContainerSearchBar";
import CardLocal from "./CardLocal";
import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function CardContainer({ collapsed }) {
  const [errorFileList, setErrorFileList] = useState([]);
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
    console.log("Inside the fetchErrorFiles");
    const temp = await axios.get("http://localhost:8080/errors/");
    console.log(temp);

    setErrorFileList(temp.data);
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
