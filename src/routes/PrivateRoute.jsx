import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { authenticationService } from "@/services/api_functions";

const PrivateRoutes = () => {
  // let currentUser = authenticationService.currentUserValue;
  // return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export { PrivateRoutes };
