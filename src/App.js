import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CommonHome from "./Pages/CommonHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorVaultPage from "./Pages/ErrorVaultPage";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState, useEffect } from "react";
import AddErrorFilePage from "./Pages/AddErrorFilePage";
import ViewErrorFilePage from "./Pages/ViewErrorFilePage";

export function App() {
  const clientId =
    "1072322961106-ebo704uhn53cqmfrs8lannqlgueoneqe.apps.googleusercontent.com";

    const [isLogged, setIsLogged] = useState(false);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login setIsLogged={setIsLogged}/>}></Route>
            <Route exact path="/" element={<CommonHome isLogged={isLogged}/>}></Route>
            <Route
              exact
              path="/errorVault"
              element={<ErrorVaultPage isLogged={isLogged}/>}
            ></Route>
            <Route exact path="/viewErrorFile" element={<ViewErrorFilePage></ViewErrorFilePage>}>
               
            </Route>
            <Route exact path="/newErrorPage" element={<AddErrorFilePage/>}></Route>
            <Route exact path="/editErrorPage" element={<AddErrorFilePage/>}></Route>
          </Routes>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
