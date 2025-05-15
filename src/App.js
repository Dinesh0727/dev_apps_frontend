import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CommonHome from "./Pages/CommonHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorVaultPage from "./Pages/ErrorVaultPage";
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AddErrorFilePage from "./Pages/AddErrorFilePage";
import ViewErrorFilePage from "./Pages/ViewErrorFilePage";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./Components/PrivateRoute";

export function App() {
  const clientId =
    "1072322961106-ebo704uhn53cqmfrs8lannqlgueoneqe.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<CommonHome />} />
            <Route
              path="/errorVault"
              element={
                <PrivateRoute>
                  <ErrorVaultPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/viewErrorFile"
              element={
                <PrivateRoute>
                  <ViewErrorFilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/newErrorPage"
              element={
                <PrivateRoute>
                  <AddErrorFilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/editErrorPage"
              element={
                <PrivateRoute>
                  <AddErrorFilePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
