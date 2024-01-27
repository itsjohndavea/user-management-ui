"use client";
import { signIn } from "next-auth/react";
import React from "react";
import NavBar from "./NavBar";

const Login = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col px-4 py-2 mt-60 text-center content-center">
        <div className="h-12">
          <button
            onClick={signIn}
            className="rounded bg-blue-600 text-white px-6 py-2 font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
