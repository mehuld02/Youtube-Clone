import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/utilsContext";
import logo1 from "../../public/logo1.png";
import profile from "../../public/profile.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { setIsSidebar, isSidebar, mobileShow, setMobileShow } = useUtils();
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery.trim().length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
      setMobileSearchOpen(false);
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } else {
      setIsSidebar(!isSidebar);
    }
  };

  return (
    <nav className="bg-black ">
    <div className="flex items-center justify-between px-4 md:px-6 py-2 fixed top-0 w-full bg-black text-white z-10 shadow">
      <div className="flex items-center space-x-4 bg-black text-white">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={handleSidebar}
        />
        <img src={logo1} alt="Logo" className="w-24 md:w-28 cursor-pointer " />
      </div>

      <div className="flex-grow flex justify-center relative">
        <div className="hidden md:flex items-center w-[60%] max-w-[600px]">
          <div className="flex-grow px-3 py-2 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none bg-black text-white"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-400 bg-black text-white rounded-r-full"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={24} />
          </button>
          <IoMdMic
            size={36}
            className="ml-3 border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-200 hover:text-black duration-200"
          />
        </div>

        {mobileSearchOpen && (
          <div className="flex md:hidden items-center absolute top-[60px] left-0 w-full px-4 z-20 bg-white">
            <IoArrowBack
              className="text-2xl mr-3 cursor-pointer"
              onClick={() => setMobileSearchOpen(false)}
            />
            <div className="flex-grow flex items-center">
              <div className="flex-grow px-3 py-2 border border-gray-400 rounded-l-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                  value={searchQuery}
                />
              </div>
              <button
                className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full"
                onClick={() => searchQueryHandler("searchButton")}
              >
                <CiSearch size={24} />
              </button>
              <IoMdMic
                size={36}
                className="ml-2 border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <CiSearch
          className="text-2xl block md:hidden cursor-pointer"
          onClick={() => setMobileSearchOpen(true)}
        />

        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-200 hover:text-black cursor-pointer rounded-full font-semibold">
          <FaPlus className="text-xl" />
          <span>Create</span>
        </div>

        <AiOutlineBell className="text-2xl cursor-pointer" />
        <img
          src={profile}
          alt="Profile"
          className="rounded-full h-9 w-9 object-cover"
        />
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
