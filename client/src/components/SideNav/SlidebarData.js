import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as SlIcons from "react-icons/sl";


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },

  {
    title: "Your Account",
    path: "/account",
    icon: <MdIcons.MdAccountCircle/>,
    cName: "nav-text"
  },

  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },

  {
    title: "Wishlist",
    path: "/Wishlisr",
    icon: <MdIcons.MdFavorite />,
    cName: "nav-text"
  },
  
  {
    title: "Calender",
    path: "/",
    icon: <SlIcons.SlCalender />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  }
];
