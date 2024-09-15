import React from "react";
import ButtonComp from "./ButtonComp";

const buttonData = [
  "All",
  "React Routers",
  "News",
  "CSS",
  "Data Structures",
  "Java",
  "Music",
  "Redux",
  "Cricket",
  "Soccer",
  "Voleyball",
  "Rugby",
];

const ButtonList = () => {
  return (
    <div className="flex gap-3">
      {buttonData.map((item, index) => (
        <ButtonComp key={index} name={item} />
      ))}

      {/* <ButtonComp name={"Router"} /> */}
    </div>
  );
};

export default ButtonList;
