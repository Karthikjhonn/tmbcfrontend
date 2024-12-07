import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

function PublicRoute({ children }) {
  const { isAuth } = useAuth();
  // const isAuth = false;
  return isAuth ? children : <Navigate to={"/log-in"} />;
}

export default PublicRoute;
