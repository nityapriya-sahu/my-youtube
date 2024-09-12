import React from "react";

const ButtonComp = ({ name }) => {
  return (
    <div>
      <button className="bg-gray text-black px-3 py-1 rounded-lg font-semibold text-sm">
        {name}
      </button>
    </div>
  );
};

export default ButtonComp;
