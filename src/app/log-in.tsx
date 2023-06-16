"use client";
import React, { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const onClickLogIn = () => {
    dispatch(logIn(username));
  };
  const onClickToggle = () => {};
  const onClickLogOut = () => {};
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />

      <br></br>
      <button onClick={onClickLogIn}> Log In</button>
      <br></br>
      <button>Log Out</button>
      <br></br>
      <button>Toggle moderator status</button>
    </div>
  );
};

export default LogIn;
