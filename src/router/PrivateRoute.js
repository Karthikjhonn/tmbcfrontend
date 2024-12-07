import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const { isAuth } = useAuth();
  // const isAuth = false;
  return isAuth ?  <Navigate to={"/"} />: children ;
}

export default PrivateRoute;
