"use client";
import React, { useState } from "react";

const LogIn = () => {
  const [username, setUsername] = useState("");

  const onClickLogIn = () => {};
  const onClickToggle = () => {};
  const onClickLogOut = () => {};
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />

      <br></br>
      <button> Log In</button>
      <br></br>
      <button>Log Out</button>
      <br></br>
      <button>Toggle moderator status</button>
    </div>
  );
};

export default LogIn;
