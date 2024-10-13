import React from "react";
import { Outlet } from "react-router-dom";
export const AppLayout = () => {
  return (
    <div>
      app-layout
      <Outlet />
    </div>
  );
};
