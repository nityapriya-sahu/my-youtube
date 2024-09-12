import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info, "HJHJHJ");
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-full sm:w-72 pb-2 m-2  shadow-md rounded-md flex flex-col">
      <img
        alt="Thumbnail"
        src={thumbnails?.medium?.url}
        className="rounded-t-md w-full object-cover"
      />
      <div className="px-2">
        <div className="font-semibold py-2 text-base text-violet truncate">
          {title}
        </div>
        <div className="text-sm text-gray-600 truncate">{channelTitle}</div>
        <div className="text-sm text-gray-500">
          {statistics.viewCount} views
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
