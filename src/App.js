import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommonHome from './Pages/CommonHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorVaultPage from './Pages/ErrorVaultPage';
import Login from './Pages/Login';


export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path="/" element={<CommonHome/>}></Route>
          <Route exact path="/errorVault" element={<ErrorVaultPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
