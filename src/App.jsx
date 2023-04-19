import { useState } from "react";
import Sidebar from "./Sidebar";
import Sidebartest from "./Sidebartest";

function App() {




  return (
    <div className="flex items-stretch w-screen overflow-hidden border-1 border-r-gray-300 border-l-gray-300 max-w-screen-2xl">
      <Sidebartest/>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
