import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { HiMiniMusicalNote } from "react-icons/hi2";
import { PiFilmSlateFill } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="col-span-1">
      <ul className="flex flex-col gap-3">
        <Link to="/">
          <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
            <IoMdHome className="text-green group-hover:text-white" />
            <span className="text-black group-hover:text-white">Home</span>
          </li>
        </Link>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <SiYoutubeshorts className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">Shorts</span>
        </li>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <MdSubscriptions className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">
            Subscriptions
          </span>
        </li>
        <li className="border-b"></li>
      </ul>
      <ul className="flex flex-col gap-3">
        <h3 className="font-bold">Explore</h3>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <IoMdTrendingUp className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">Trending</span>
        </li>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <RiShoppingBag4Fill className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">Shopping</span>
        </li>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <HiMiniMusicalNote className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">Music</span>
        </li>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <PiFilmSlateFill className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">Films</span>
        </li>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <SiYoutubegaming className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">Gaming</span>
        </li>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <FaNewspaper className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">News</span>
        </li>
        <li className="flex gap-4 items-center p-2 rounded-md cursor-pointer hover:bg-green hover:text-white hover:font-semibold group">
          <GiTrophyCup className="text-green group-hover:text-white" />
          <span className="text-black group-hover:text-white">Sports</span>
        </li>

        <li className="border-b"></li>
      </ul>
    </div>
  );
};

export default Sidebar;
