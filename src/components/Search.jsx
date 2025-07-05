import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import Sidebar from "./Sidebar.jsx";
import SearchCard from "./SearchCard.jsx";
import { useEffect, useState } from "react";
import { useUtils } from "../context/utilsContext";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineFeedback } from "react-icons/md";

function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { isSidebar, mobileShow } = useUtils();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };

  

  return (
    <div>

        {!isSidebar && !mobileShow && (
          <div className="hidden xl:flex flex-col items-center w-16 fixed top-20 left-0 h-[calc(100vh-6rem)] bg-black text-white z-30 py-4 space-y-4 shadow-md">
            {[
              { icon: <GoHome />, name: "Home" },
              { icon: <SiYoutubeshorts />, name: "Shorts" },
              { icon: <MdOutlineSubscriptions />, name: "Subs" },
              { icon: <MdOutlineFeedback />, name: "You" },
            ].map(({ icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center space-y-1 cursor-pointer hover:bg-gray-200 rounded-xl p-2 w-full"
              >
                <div className="text-xl">{icon}</div>
                <span className="text-[10px] text-center">{name}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex-1 h-[calc(100vh-6rem)] overflow-y-scroll overflow-x-hidden transition-all duration-300">
          <div className="grid grid-cols-1 gap-2 p-2">
            {result?.map((item, index) => {
              if (item?.type !== "video") return null;
              return <SearchCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
  );
}

export default Search;
