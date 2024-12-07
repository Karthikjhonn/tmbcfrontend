import logo from "./logo.svg";
import "./App.css";
import MainRouter from "./router/MainRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
