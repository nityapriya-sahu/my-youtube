import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { FaBeer } from "react-icons/fa";

const MainContainer = () => {
  return (
    <div className="col-span-11">
      <ButtonList />
      <VideoContainer />
      <FaBeer />
    </div>
  );
};

export default MainContainer;
