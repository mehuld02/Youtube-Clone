import { useAuth } from "../context/AuthProvider.jsx";
import Video from "./Video";
import ListItems from "./Listitems.jsx";
import { useEffect } from "react";
import { useUtils } from "../context/utilsContext.jsx";

function Home() {
  const { data = [], loading } = useAuth();
  const { isSidebar, setIsSidebar } = useUtils();

  useEffect(() => {
    setIsSidebar(false); // Always show mini sidebar on Home
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Scrollable category list */}
      <ListItems />

      <div
        className={`w-full mt-6 px-4 max-w-[1200px] mx-auto ${
          isSidebar ? "xl:ml-0" : "xl:ml-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return null;
              return <Video key={item.video.videoId} video={item.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
