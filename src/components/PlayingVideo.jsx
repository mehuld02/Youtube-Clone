import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";
import { BsFillCheckCircleFill } from "react-icons/bs";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => setVideo(res));
  };

  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) =>
      setRelatedVideo(res)
    );
  };


  return (
    <>

      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6">
        <div className="relative w-full pt-[56.25%] -mx-4 lg:mx-0">
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=${id}`}
    width="100%"
    height="100%"
    controls
    playing
    className="absolute top-0 left-0"
    style={{ backgroundColor: "#000" }}
  />
</div>


          <div className="text-sm font-bold line-clamp-2 mt-4">{video?.title}</div>

          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className="text-sm">{video?.author?.stats?.subscribersText}</div>
                </div>

                <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200">
                  Subscribe
                </span>
              </div>
            </div>

            <div className="flex mt-4 md:mt-0 bg-black text-white">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {`${abbreviateNumber(video?.stats?.views, 2)} views`}
              </div>
            </div>
          </div>

          <div className="p-4 bg-black text-white  rounded-xl mt-4 text-sm">{video?.description}</div>

          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl text-white bg-black">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>

       
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-6rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]">
          {relatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return null;
            return <SuggestedVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
      </>
  );
}

export default PlayingVideo;
