import { useState } from "react";
import Sidebar from "./Sidebar";
import Sidebartest from "./Sidebartest";

function App() {




  return (
    <div className="flex">
      <Sidebartest/>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
