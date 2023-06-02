import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ShoppingPage from "./components/ShoppingPage";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ShoppingPage />
    </React.Fragment>
  );
}

export default App;
