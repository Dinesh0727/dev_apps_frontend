import React from "react";
import "../styles/AddErrorFilePage.css";
import SideNav from "../Components/SideNav";
import ErrorBody from "../Components/ErrorBody";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiClient from "../clients/apiClient";

// Create a drop down to download the error file and other options
class ErrorFile {
  constructor(
    errorTitle,
    project_title,
    problemText,
    solutionText,
    beforeFixText,
    afterFixText,
    imagesList,
    referenceList,
    labelList
  ) {
    this._title = errorTitle; // Internal properties prefixed with _
    this._projectTitle = project_title;
    this._problemDescription = problemText;
    this._solutionDescription = solutionText;
    this._codeBeforeFix = beforeFixText;
    this._codeAfterFix = afterFixText;
    this._imageList = imagesList || [];
    this._referenceLinks = referenceList || [];
    this._labels = labelList || [];
  }

  // Getter and setter for errorTitle
  get errorTitle() {
    return this._title;
  }

  set errorTitle(value) {
    this._title = value;
  }

  // Getter and setter for projectTitle
  get projectTitle() {
    return this._projectTitle;
  }

  set projectTitle(value) {
    this._projectTitle = value;
  }

  // Getter and setter for problemText
  get problemText() {
    return this._problemDescription;
  }

  set problemText(value) {
    this._problemDescription = value;
  }

  // Getter and setter for solutionText
  get solutionText() {
    return this._solutionDescription;
  }

  set solutionText(value) {
    this._solutionDescription = value;
  }

  // Getter and setter for beforeFixText
  get beforeFixText() {
    return this._codeBeforeFix;
  }

  set beforeFixText(value) {
    this._codeBeforeFix = value;
  }

  // Getter and setter for afterFixText
  get afterFixText() {
    return this._codeAfterFix;
  }

  set afterFixText(value) {
    this._codeAfterFix = value;
  }

  // Getter and setter for imageList
  get imageList() {
    return this._imageList;
  }

  set imageList(value) {
    if (Array.isArray(value)) {
      this._imageList = value;
    } else {
      throw new Error("imageList must be an array");
    }
  }

  // Getter and setter for referenceList
  get referenceList() {
    return this._referenceLinks;
  }

  set referenceList(value) {
    if (Array.isArray(value)) {
      this._referenceLinks = value;
    } else {
      throw new Error("referenceList must be an array");
    }
  }

  // Getter and setter for labelList
  get labelList() {
    return this._labels;
  }

  set labelList(value) {
    if (Array.isArray(value)) {
      this._labels = value;
    } else {
      throw new Error("labelList must be an array");
    }
  }

  // Method to add an image to the imageList
  addImage(imageUrl) {
    this._imageList.push(imageUrl);
  }

  // Method to add a reference to the referenceList
  addReference(reference) {
    this._referenceLinks.push(reference);
  }

  // Method to add a label to the labelList
  addLabel(label) {
    this._labels.push(label);
  }

  // Method to get a summary of the error
  getSummary() {
    return `${this._title} in project ${this._projectTitle}: ${this._problemDescription}`;
  }

  // Method to get the details of the solution
  getSolutionDetails() {
    return `Solution: ${this._solutionDescription}\nBefore Fix: ${this._codeBeforeFix}\nAfter Fix: ${this._codeAfterFix}`;
  }
}

export default function AddErrorFilePage() {
  

  var errorFile = new ErrorFile();

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
      const response = await apiClient.post(
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
  
  const viewErrorCard = (id) => {

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
            onClick={createErrorFile}
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
