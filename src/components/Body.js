import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col p-4 gap-4">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
