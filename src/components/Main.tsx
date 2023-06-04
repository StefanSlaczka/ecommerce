import React from "react"
import videoBG from "../data/assets/videoBG.mp4"
import '../style/Main.css'

const Main = () => {
  return (
    <div className="main">
      <video src={videoBG} autoPlay loop muted />
    </div>
  );
};

export default Main;