import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar'

type LayoutProp =  {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <>
    <div className="flex relative min-w-full max-w-fit font-body">
      <Sidebar />
      <div className="w-full bg-dashboardBg min-h-full">
        <Navbar />
        <div className=" " >{children}</div>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Layout