import React from "react";
import Home from "../pages/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import NowPlayingBar from "../components/NowPlayingBar";
import Register from "../pages/Register";
import SongPage from "../pages/SongPage";
import PrivateRoutes from "./PrivateRoutes";
import PlayList from "../pages/PlayList";
import Discover from "../pages/Discover";

const LayoutWithSidebar = () => (
  <div className="flex">
    <SideBar />
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex-1 p-4 bg-[#412C3A]">
        <Outlet />
      </div>
      <Footer />
      <NowPlayingBar />
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes without Sidebar (Login & Signup) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes with Sidebar */}
      <Route element={<LayoutWithSidebar />}>
        <Route
          element={<PrivateRoutes role={["listener", "artist", "admin"]} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Route>
        <Route element={<PrivateRoutes role={["listener"]} />}>
          <Route path="/playlist" element={<PlayList />} />
        </Route>
        <Route element={<PrivateRoutes role={["artist"]} />}>
          <Route path="/songs" element={<SongPage />} />
        </Route>
        <Route element={<PrivateRoutes role={["admin"]} />}>
          <Route path="/admin/users" element={<div>Quản lý user</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
