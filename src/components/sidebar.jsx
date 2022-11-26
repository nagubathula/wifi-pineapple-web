import React, { useState } from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import WifiIcon from "@mui/icons-material/Wifi";
import DescriptionIcon from "@mui/icons-material/Description";
import ExtensionIcon from "@mui/icons-material/Extension";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { name: "Dashboard", link: "/", icon: SpeedIcon },
    { name: "Campaigns", link: "/", icon: WorkHistoryIcon },
    { name: "PineAP", link: "/", icon: WifiIcon, margin: true },
    //   { name: "Recon", link: "/", icon: FiFolder },
    { name: "Logging", link: "/", icon: DescriptionIcon },
    { name: "Modules", link: "/", icon: ExtensionIcon, margin: true },
    // { name: "Settings", link: "/", icon: SettingsIcon },
    // { name: "Close", link: "/", icon: ArrowBackIosIcon },
  ];
  return (
    <div className="flex   ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  shadow-lg bg-[#F4F4F4] h-screen p-5  pt-8   `}
      >
        <img
          src="arrow.jpeg"
          className={`absolute cursor-pointer ml-2  bottom-12 w-5 
               ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <img
          src="settings.svg"
          className={`absolute cursor-pointer ml-2 bottom-28 w-5 
               ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <ul className="p-0 ">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-[#F4F4F4]"
              } `}
            >
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              <div className="p-0 mt-0">
                <Menu.icon className="text-2xl" />
              </div>

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div> */}
    </div>
  );
};
export default Sidebar;
