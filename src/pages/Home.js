import React from "react";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, userLogOut } = useAuth();
  return (
    <main className="p-5 ">
      <header className="flex justify-between items-center flex-wrap">
        <div>
          <h1 className="text-3xl font-semibold text-black">
            Welcome {user?.firstName} {user?.lastName}! 👋
          </h1>
          <p className="text-sm font-normal text-offBlack ">{user?.email}</p>
        </div>
        <button onClick={()=>userLogOut()}>log out</button>
      </header>
    </main>
  );
}

export default Home;
