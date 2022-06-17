import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./sidebar.css";

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
            icon: <RiHome8Line />
        },
        {
            path: "/tiket",
            name: "Tiket",
            icon: <TbTicket />
        },
        {
            path: "/task",
            name: "Task",
            icon: <BiTask />
        },
        {
            path: "/archive",
            name: "Archive",
            icon: <HiOutlineArchive />
        },
        {
            path: "/perusahaan",
            name: "Perusahaan",
            icon: <TbBuildingSkyscraper />
        }
    ]
    const menuItemMiddle = [
        {
            path: "/user",
            name: "User",
            icon: <TbUsers />
        }, {
            path: "/layer",
            name: "Layer",
            icon: <FiLayers />
        }, {
            path: "/box",
            name: "Box",
            icon: <SiHackthebox />
        }, {
            path: "/someShape",
            name: "SomeShape",
            icon: <TbDrone />
        }, {
            path: "/analysis",
            name: "Analysis",
            icon: <TbZoomMoney />
        }
    ]
    const menuItemBottom = [
        {
            path: "/idk",
            name: "idk",
            icon: <RiPhoneCameraLine />
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
    console.log(menuItems[0].data[1].path);
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <p className='logo'>logo</p>
                </div>
                <IconContext.Provider value={{ size: "1.2em" }}>
                    <div className="menuItems">
                        {menuItems.map((menuItem, index) => (
                            <div className={menuItem.className} key={index}>
                                {menuItem.data.map((item, i) => (
                                    <NavLink to={item.path} key={i} className="link" activeclassName="active">
                                        {(pathname === item.path) ? <span className='greenBar'></span> : <span></span>}
                                        <div className="icon">{item.icon}</div>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </IconContext.Provider>
            </div>
            <main>{children}</main>
        </div>
    )
}


