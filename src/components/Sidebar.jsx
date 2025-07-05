import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback, MdOutlinedFlag } from "react-icons/md";
import { useUtils } from "../context/utilsContext";

function Sidebar() {
  const { isSidebar, mobileShow, setMobileShow } = useUtils();

  const sidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        { id: 1, name: "Home", icon: <GoHome /> },
        { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
        { id: 3, name: "Subscription", icon: <MdOutlineSubscriptions /> },
      ],
    },
    {
      groupName: "You",
      groupItems: [
        { id: 4, name: "History", icon: <MdHistory /> },
        { id: 5, name: "Playlists", icon: <MdOutlinePlaylistPlay /> },
        { id: 6, name: "Watch later", icon: <MdOutlineWatchLater /> },
        { id: 7, name: "Your Videos", icon: <BiVideo /> },
        { id: 8, name: "Liked videos", icon: <AiOutlineLike /> },
      ],
    },
    {
      groupName: "Explore",
      groupItems: [
        { id: 9, name: "Trending", icon: <SiTrendmicro /> },
        { id: 10, name: "Shopping", icon: <HiOutlineShoppingBag /> },
        { id: 11, name: "Music", icon: <SiYoutubemusic /> },
        { id: 12, name: "Movies", icon: <PiFilmSlateLight /> },
        { id: 13, name: "Live", icon: <CgMediaLive /> },
        { id: 14, name: "Gaming", icon: <IoGameControllerOutline /> },
        { id: 15, name: "News", icon: <FaRegNewspaper /> },
        { id: 16, name: "Sports", icon: <TfiCup /> },
        { id: 17, name: "Courses", icon: <SiStylelint /> },
        { id: 18, name: "Fashion & Beauty", icon: <PiLightbulbLight /> },
        { id: 19, name: "Podcasts", icon: <MdPodcasts /> },
      ],
    },
    {
      groupName: "More from Youtube",
      groupItems: [
        { id: 20, name: "Youtube Premium", icon: <FaYoutube /> },
        { id: 21, name: "Youtube Music", icon: <SiYoutubemusic /> },
        { id: 22, name: "Youtube Kids", icon: <SiYoutubekids /> },
      ],
    },
    {
      groupName: "Others",
      groupItems: [
        { id: 23, name: "Settings", icon: <CiSettings /> },
        { id: 24, name: "Report history", icon: <MdOutlinedFlag /> },
        { id: 25, name: "Help", icon: <IoHelpCircleOutline /> },
        { id: 26, name: "Send feedback", icon: <MdOutlineFeedback /> },
      ],
    },
  ];

  const ModelOverlay = () => (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 shadow-xl xl:hidden"
      onClick={() => setMobileShow(false)}
    />
  );

  return (
    <>
    <div
  className={`
    transition-all duration-300
    h-[calc(100vh-6.625rem)] px-2 lg:px-4 overflow-y-scroll overflow-x-hidden scrollbar-thin
    z-40 bg-black text-white
    ${mobileShow ? "fixed top-0 bottom-0 left-0 w-[75%] sm:w-[60%] md:w-[20%]" : ""}
    ${isSidebar ? "xl:fixed xl:top-[4rem] xl:left-0 xl:w-60" : "xl:hidden"}
  `}
>


        <div className="space-y-2">
          {sidebarItems.map((group) => (
            <div className="mb-5" key={group.groupName}>
              <h1 className="font-bold text-sm text-gray-700 ">{group.groupName}</h1>
              {group.groupItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 hover:bg-gray-200 duration-300 rounded-xl p-2"
                >
                  <div className="text-lg cursor-pointer">{item.icon}</div>
                  <span className="text-sm cursor-pointer text-gray-700 whitespace-nowrap">{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="text-xs text-gray-500 font-semibold">
          <p>
            About Press Copyright<br />
            Contact us Creators Advertise<br />
            Developers<br /><br />
            Terms Privacy Policy & Safety<br />
            How YouTube works<br />
            Test new features
          </p>
        </div>
        <p className="text-xs text-gray-600 mt-4">© 2025 Google LLC</p>
      </div>

      {/* Mobile Overlay */}
      {mobileShow && <ModelOverlay />}

      {/* Mini Sidebar (icon-only mode) */}
    {!isSidebar && !mobileShow && (
  <div className="hidden xl:flex flex-col items-center w-16 h-[calc(100vh-4rem)] py-4 space-y-4 bg-black text-white fixed top-[4rem] left-0 z-10">
          {[{ icon: <GoHome />, name: "Home" }, { icon: <SiYoutubeshorts />, name: "Shorts" }, { icon: <MdOutlineSubscriptions />, name: "Subs" }, { icon: <MdOutlineFeedback />, name: "You" }].map(({ icon, name }) => (
            <div key={name} className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-gray-200 rounded-xl p-2 w-full">
              <div className="text-xl">{icon}</div>
              <span className="text-[10px] text-center">{name}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Sidebar;
