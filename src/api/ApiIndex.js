import { GET, POST } from "./ApiInterface";

export const CheckServer = () => {
  return GET();
};

export const signIn = (payload) => {
  return POST("/sign-in", payload);
};
export const logIn = (payload) => {
  return POST("/log-in", payload);
};
