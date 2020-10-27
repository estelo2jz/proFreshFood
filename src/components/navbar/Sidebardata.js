import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",

  },
  {
    title: "About",
    path: "/about",
    icon: <FcIcons.FcAbout />,
    cName: "nav-text",

  },
  {
    title: "Fruits",
    path: "/fruits",
    icon: <GiIcons.GiFruitBowl />,
    cName: "nav-text",

  },
  {
    title: "Tropical Oil",
    path: "/tropicalOil",
    icon: <GiIcons.GiOilySpiral />,
    cName: "nav-text",

  },
  {
    title: "Services",
    path: "/services",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",

  },
  {
    title: "Sustainability",
    path: "/sustainability",
    icon: <BsIcons.BsGraphUp />,
    cName: "nav-text",

  },
  {
    title: "News",
    path: "/news",
    icon: <BiIcons.BiNews />,
    cName: "nav-text",

  },
  {
    title: "Blog",
    path: "/blog",
    icon: <FaIcons.FaBlog />,
    cName: "nav-text",

  },
  {
    title: "Media Gallary",
    path: "/mediaGallary",
    icon: <MdIcons.MdPermMedia />,
    cName: "nav-text",

  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiFillContacts />,
    cName: "nav-text",

  },
];