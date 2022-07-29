import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./sidebar.css";
import { Topbar } from '../topbar/Topbar';


// Import Icons
import { IconContext } from 'react-icons';
import {
    RiHome8Line
} from "react-icons/ri";
import {
    TbTicket,
    TbBuildingSkyscraper,
    TbUsers,
    TbDrone,
    TbZoomMoney
} from "react-icons/tb";
import { BiTask } from "react-icons/bi";
import { HiOutlineArchive } from "react-icons/hi";
import { FiLayers } from "react-icons/fi";
import { SiHackthebox } from "react-icons/si";
import { RiPhoneCameraLine } from "react-icons/ri";


export const Sidebar = ({ children }) => {
    const menuItemTop = [
        {
            path: "/",
            name: "Dashboard",
            icon: <RiHome8Line className='sidebar_icon' />
        },
        {
            path: "/tiket",
            name: "Tiket",
            icon: <TbTicket className='sidebar_icon' />
        },
        {
            path: "/task",
            name: "Task",
            icon: <BiTask className='sidebar_icon' />
        },
        {
            path: "/archive",
            name: "Archive",
            icon: <HiOutlineArchive className='sidebar_icon' />
        },
        {
            path: "/perusahaan",
            name: "Perusahaan",
            icon: <TbBuildingSkyscraper className='sidebar_icon' />
        }
    ]
    const menuItemMiddle = [
        {
            path: "/user",
            name: "User",
            icon: <TbUsers className='sidebar_icon' />
        }, {
            path: "/layer",
            name: "Layer",
            icon: <FiLayers className='sidebar_icon' />
        }, {
            path: "/box",
            name: "Box",
            icon: <SiHackthebox className='sidebar_icon' />
        }, {
            path: "/someShape",
            name: "SomeShape",
            icon: <TbDrone className='sidebar_icon' />
        }, {
            path: "/analysis",
            name: "Analysis",
            icon: <TbZoomMoney className='sidebar_icon' />
        }
    ]
    const menuItemBottom = [
        {
            path: "/idk",
            name: "idk",
            icon: <RiPhoneCameraLine className='sidebar_icon' />
        }
    ]
    const menuItems = [{
        className: "menuItemsTop",
        data: menuItemTop
    }, {
        className: "menuItemsMiddle",
        data: menuItemMiddle
    }, {
        className: "menuItemsBottom",
        data: menuItemBottom
    }];
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <a className='logo' href='https://pngtree.com/so/Health'>
                        <img src="/images/logo.png" alt="" />
                    </a>
                </div>

                <div className="menuItems">
                    {menuItems.map((menuItem, index) => (
                        <div className={menuItem.className} key={index}>
                            {menuItem.data.map((item, i) => (
                                <NavLink to={item.path} key={i} className="link" activeclassname="active">
                                    {(pathname === item.path) ? <span className='barGreen'></span> : <span className="bar"></span>}
                                    {item.icon}
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>


            </div>
            <main>
                <Topbar />
                <div className="container_content">
                    {children}
                </div>
            </main>
        </div>
    )
}


