import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/LogIn/Login";
import Signup from "./Components/SignUp/Signup";
import Navigator from "./Components/NavBar/Navigator";
import "bootstrap/dist/css/bootstrap.min.css";
import Compte from "./Components/Compte/Compte";

function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/compte" element={<Compte />} />
      </Routes>
    </div>
  );
}

export default App;
