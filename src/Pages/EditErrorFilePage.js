import React from "react";
import "../styles/AddErrorFilePage.css";
import SideNav from "../Components/SideNav";
import ErrorBody from "../Components/ErrorBody";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditErrorFilePage() {
  

  var errorFile = location.state;

  const navigate = useNavigate();

  const createErrorFile = async () => {
    const errorFileData = {
      title: errorFile.errorTitle,
      projectTitle: errorFile.projectTitle,
      problemDescription: errorFile.problemText,
      solutionDescription: errorFile.solutionText,
      codeBeforeFix: errorFile.beforeFixText,
      codeAfterFix: errorFile.afterFixText,
      imageList: errorFile.imageList,
      referenceLinks: errorFile.referenceList,
      labels: errorFile.labelList,
    };
  
    console.log("Sending data:", errorFileData);  // Log the data being sent
  
    try {
      const response = await axios.post(
        "http://localhost:8080/errors/createErrorFile",
        errorFileData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", response.data);
      if (response.data) {
        viewErrorCard(response.data);
      }
    } catch (error) {
      console.error("Error creating error file:", error);
    }
  };
  
  const saveErrorFile = (id) => {

    // Navigate to the viewErrorFile route, passing the document ID as state
    navigate("/viewErrorFile", { state: id });
  };

  return (
    <div>
      <div className="Navbar">
        <div className="logo">Error File Logo</div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={saveErrorFile}
          >
            Save Error File
          </button>
        </div>
        <div className="profile">Tools</div>
      </div>
      <div className="body">
        <SideNav></SideNav>
        <ErrorBody errorFile={errorFile}></ErrorBody>
      </div>
    </div>
  );
}
