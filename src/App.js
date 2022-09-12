import { useState } from "react";
import "./App.css";
import { DataDisplay } from "./dataDisplay";
import { Autentication } from "./Autentication";

function App() {
  const [success, setSuccess] = useState(false);

  const Login = (status) => {
    setSuccess(status);
  };

  if (success) {
    return <DataDisplay logoutCallBack={Login} />;
  } else {
    return <Autentication loginCallBack={Login} />;
  }
}

export default App;
