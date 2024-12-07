import React, { createContext, useContext, useEffect, useState } from "react";
import { logIn, signIn } from "../api/ApiIndex";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const userSignIn = async (payload) => {
    setLoading(true);
    try {
      const res = await signIn(payload);
      console.log(res);

      if (res.status == 200) {
        toast.success(res?.data?.message || "User created successfully");
        localStorage.setItem("token", res?.data?.token);
        setUser(res?.data?.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const userLogIn = async (payload) => {
    setLoading(true);
    try {
      const res = await logIn(payload);
      console.log(res);
      if (res.status == 200) {
        toast.success(res?.data?.message || "Logged in successfully");
        localStorage.setItem("token", res?.data?.token);
        setUser(res?.data?.user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const userLogOut = () => {
    localStorage.removeItem("token");
    setIsAuth(false)
  };
  const value = {
    user,
    isAuth,
    userSignIn,
    userLogIn,
    userLogOut,
    loading,
  };
  useEffect(() => {
    setIsAuth(localStorage.getItem("token") ? true : false);
  }, [userLogIn, userLogOut, userSignIn]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
