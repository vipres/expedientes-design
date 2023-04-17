import { useState } from "react";



const Sidebar = () => {

    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
      ];

      const [open, setOpen] = useState(false);
  return (
    <>
        <div
        className={`${
          open ? "w-40" : "w-20"
        } duration-300 pt-8 h-screen bg-dark-purple relative`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className={`flex items-center`}>
          <img
            src="./src/assets/logo.png"
            alt=""
            className={`mx-auto ${
              open ? "w-32" : "w-16"
            } cursor-pointer duration-500`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => {
            return(
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
              <img src={`./src/assets/${menu.src}.png`}/>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </li>)
          })}
        </ul>
      </div>

    </>
  )
}

export default Sidebar
