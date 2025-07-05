import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";
import MainLayout from "./components/Mainlayout";

function App() {
  const { loading } = useAuth();

  return (
    <div>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" exact element={<Search />} />
        <Route path="/video/:id" exact element={<PlayingVideo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
