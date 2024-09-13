import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getYouTubeDAta();
  }, []);

  const getYouTubeDAta = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    // console.log(jsonData.items);
    setVideos(jsonData.items);
  };
  return (
    <div className="flex flex-wrap mt-4">
      {videos.map((item) => (
        <Link key={item.id} to={`/watch?v=${item.id}`}>
          <VideoCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
