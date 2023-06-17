"use client";
import React, { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.value.isAuth
  );
  const dispatch = useDispatch<AppDispatch>();
  const onClickLogIn = () => {
    dispatch(logIn(username));
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };
  const onClickLogOut = () => {};
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />

      <br></br>
      <button onClick={onClickLogIn}> Log In</button>
      <br></br>
      <button>Log Out</button>
      <br></br>
      {isAuthenticated && (
        <button onClick={onClickToggle}>Toggle moderator status</button>
      )}
    </div>
  );
};

export default LogIn;
