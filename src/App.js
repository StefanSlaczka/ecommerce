import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ShoppingPage from "./components/ShoppingPage";
import Main from "./components/Main"

function App() {
  return (
    <React.Fragment>
      <Main/>
      <NavBar />
      <ShoppingPage />
    </React.Fragment>
  );
}

export default App;
