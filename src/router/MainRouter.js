import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function MainRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/sign-in"
            element={
              <PrivateRoute>
                <SignIn />
              </PrivateRoute>
            }
          />
          <Route
            path="/log-in"
            element={
              <PrivateRoute>
                <LogIn />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default MainRouter;
