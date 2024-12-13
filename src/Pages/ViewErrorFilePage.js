import React, { useEffect, useState } from "react";
import "../styles/AddErrorFilePage.css";
import SideNav from "../Components/SideNav";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ViewError from "../Components/ViewError";

// Create a drop down to download the error file and other options

export default function ViewErrorFilePage() {
  const location = useLocation();
  const index = location.state;
  const [errorFile, setErrorFile] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  console.log(index);

  const apiCallToFetchErrorFile = async () => {
    try {
      const temp = await axios.get("http://localhost:8080/errors/" + index);
      setErrorFile(temp.data);
      console.log(temp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const moveToEditErrorFile = () => {
    navigate("/editErrorPage", {state : errorFile})
  }

  useEffect(() => {
    apiCallToFetchErrorFile();
  }, []);

  if (isLoading) {
    return <center>Loading......</center>;
  }

  return (
    <div>
      <div className="Navbar">
        <div className="logo">Error File Logo</div>
        <div>
          <button type="button" className="btn btn-primary" onClick={() => moveToEditErrorFile(index)}>
            Edit ErrorFile
          </button>
        </div>
        <div className="profile">Tools</div>
      </div>
      <div className="body">
        <SideNav></SideNav>
        {errorFile ? (
          <ViewError errorFile={errorFile}></ViewError>
        ) : (
          <center>No Error File Found</center>
        )}
      </div>
    </div>
  );
}
