import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Yt_Logo from "../yt_logo-rbg.png";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery, "searchsearch");
  const [suggestion, setSuggestion] = useState([]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  //Make an API call when typing in search bar
  useEffect(() => {
    // but if the diff betn 2 API calls < 200ms, then decline API call
    const timer = setTimeout(() => {
      getSearchSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const json = await data.json();
    console.log(json[1], "JSON JSON");
    setSuggestion(json[1]);
  };
  return (
    <div className="grid grid-flow-col shadow-md py-3 px-4 bg-white sticky top-0 w-full">
      <div className="col-span-1 flex items-center">
        <RxHamburgerMenu
          size={30}
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer hover:bg-gray p-1 rounded-full"
        />
        <img
          alt="youtube-logo"
          src={Yt_Logo}
          className="h-12 w-32 cursor-pointer object-cover"
        />
      </div>
      <div className="col-span-10 flex items-center justify-center ">
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
