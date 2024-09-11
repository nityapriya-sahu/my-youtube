import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-md py-4 px-4 bg-white sticky top-0 w-full">
      <div className="col-span-1 flex items-center gap-4">
        <RxHamburgerMenu
          size={20}
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer"
        />
        <img
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          className="h-8 w-32 cursor-pointer"
        />
      </div>
      <div className="col-span-10 flex items-center justify-center ">
        <input
          type="text"
          name="search"
          className="border w-1/3 py-2 rounded-l-full border-violet px-4 border-r-0"
        />
        <button className="border py-3 px-6 rounded-r-full bg-gray border-violet">
          <CiSearch />
        </button>
        <div className="flex ml-4 bg-gray p-2 rounded-full cursor-pointer hover:bg-green group">
          <FaMicrophone size={20} className=" group-hover:text-white" />
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end gap-8">
        <div className="hover:bg-gray p-2 rounded-full cursor-pointer ">
          <IoMdNotificationsOutline size={30} />
        </div>
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Header;
