import React from 'react'
import Home from '../pages/Home'
import { Route, Routes, Outlet } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../pages/Login'
import PlayList from '../pages/PlayList'

const LayoutWithSidebar = () => (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex-1 p-4 bg-[#412C3A]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
  
  const AppRoutes = () => {
    return (
      <Routes>
        {/* Routes without Sidebar (Login & Signup) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
  
        {/* Routes with Sidebar */}
        <Route element={<LayoutWithSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<PlayList />} />
        </Route>
      </Routes>
    );
  };
  
  export default AppRoutes;