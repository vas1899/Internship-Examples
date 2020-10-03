import axios from "axios";
import { database } from "faker";

export const signIn = async ({ username, password }) => {
  const res = await axios.post("/signin", {
    username,
    password,
  });
  return res.data;
};

export const signInToken = async ({ username, password }) => {
  const res = await axios.post("/signin/token", {
    username,
    password,
  });
  const { token } = res.data;
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("token", token);
  return res.data;
};

export const signUp = async ({ name, username, password }) => {
  const res = await axios.post("/signup", {
    name,
    username,
    password,
  });
  return res.data;
};

export const signUpToken = async ({ name, username, password }) => {
  const res = await axios.post("/signup/token", {
    name,
    username,
    password,
  });
  return res.data;
};

export const signOut = async () => {
  const res = await axios.post("/signout");
  return res.data;
};
