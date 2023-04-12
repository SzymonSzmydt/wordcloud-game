import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("quizboard");
    }
    if (!user) {
      navigate("login");
    }
  }, []);
  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
