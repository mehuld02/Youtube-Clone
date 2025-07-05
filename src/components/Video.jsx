import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  return (
<div className="text-white bg-transparent w-full">
  <Link to={`/video/${video?.videoId}`}>
    <div className="flex flex-col">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={video?.thumbnails[0]?.url}
          alt=""
        />
        {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
      </div>


          {/* channel logo & title */}
          <div className="flex mt-3 space-x-2">
            <div className="h-9 w-9 rounded-full overflow-hidden border">
              <img
                className="h-full w-full object-cover"
                src={video?.author?.avatar[0]?.url}
                alt=""
              />
            </div>
            <div>
              <p className="text-sm font-bold line-clamp-2">{video?.title}</p>
              <p className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="ml-1 text-[12px]" />
                )}
              </p>
              <div className="flex text-gray-500 text-[12px]">
                <span>{abbreviateNumber(video?.stats?.views || 0, 2)} views</span>
                <span className="mx-1 text-lg leading-none">•</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
