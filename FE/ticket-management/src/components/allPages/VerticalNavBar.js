import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const Verticalnav = () => {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Case Management", link: "/", icon: TbReportAnalytics },
    { name: "Chat", link: "/", icon: FiMessageSquare },
    { name: "Profile", link: "/", icon: AiOutlineUser, margin: true },
  ];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex">
      <div
        className={`bg-[white] min-h-screen flex flex-col ${
          open ? "w-65" : "w-16"
        } duration-500 text-textColor px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-8">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={`flex items-center text-md gap-3.5 font-medium p-2 hover:bg-hover-color rounded-md transition-all duration-300 ease-in-out ${
                menu.margin ? "" : ""
              }`}
            >
              <div>{React.createElement(menu.icon, { size: "24" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticalnav;
