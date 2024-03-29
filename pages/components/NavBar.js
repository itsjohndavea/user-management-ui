"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { space } from "postcss/lib/list";
const NavBar = () => {
  const { data: session, status } = useSession();
  return (
    <div className=" bg-slate-950">
      <div className="h-16 px-8 flex items-center">
        <p className="text-white font-bold">User Management System</p>
        {session && (
          <div className="flex items-center sm:space-x-2 justify-end right-10 absolute">
            <p className="text-white cursor-pointer" onClick={signOut}>
              {session?.user.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
