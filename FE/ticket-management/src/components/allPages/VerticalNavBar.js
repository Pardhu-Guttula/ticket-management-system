import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const VerticalNavBar = () => {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Case Management", link: "/", icon: TbReportAnalytics },
    { name: "Chat", link: "/", icon: FiMessageSquare },
    { name: "Profile", link: "/", icon: AiOutlineUser },
  ];
  const [open, setOpen] = useState(true);

  // Toggle sidebar based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex ${
        open ? "w-64" : "w-16"
      } bg-white duration-150 min-h-screen`}
    >
      <div className="flex flex-col w-full">
        <button className="self-end m-4" onClick={() => setOpen(!open)}>
          <HiMenuAlt3 size={26} />
        </button>
        <nav className="flex-1">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.link}
              className="flex items-center p-4 hover:bg-navHover"
            >
              <menu.icon size={24} />
              <span className={`ml-4 ${!open && "hidden"}`}>{menu.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default VerticalNavBar;
