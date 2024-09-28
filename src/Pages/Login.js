import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login({ setIsLogged }) {
  const navigate = useNavigate();

  const login = async (credentialResponse) => {
    var res;
    try {
      res = await axios.post(
        "http://localhost:8080/api/tokens",
        credentialResponse
      );
    } catch (error) {
      console.log("Error occurred while logging in through Google");
    }

    if (res.status != 200) {
      navigate("/");
    } else {
      setIsLogged(true);
      navigate("/");
    }
  };

  useEffect(() => {
    const flag = localStorage.getItem("isLogged");
    if (flag === "true") {
      navigate("/errorVault");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Sign in Page</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          login(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      >
        <button>Google Login</button>
      </GoogleLogin>
    </div>
  );
}
