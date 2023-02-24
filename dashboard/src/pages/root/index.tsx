import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <nav>
        <NavLink to="/dashboard">Overview</NavLink>
        <NavLink to="/customers">Customers</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Root;
