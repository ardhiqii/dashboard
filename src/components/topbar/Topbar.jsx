import React from 'react'
import "./topbar.css"

import { BiChevronRight } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdNotificationsOutline } from "react-icons/io"
import { IconContext } from 'react-icons';
export const Topbar = () => {
    const namaPerusahaan = "Mitramas Infosys Global"
    const namaUser = "John Doe"
    const photo = "https://www.w3schools.com/howto/img_avatar.png"
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">

                    <h4 className='title'>Perusahaan</h4>
                    <BiChevronRight size={20} color={"#dadcda"} className="arrow" />
                    <h4>{namaPerusahaan}</h4>
                </div>
                <div className="topRight">
                    <div className="topRight_left">
                        <IconContext.Provider value={{ size: "1.2em", color: "black" }}>
                            <div className="search">
                                <AiOutlineSearch className="icon" />
                            </div>
                            <div className="notification">

                                <IoMdNotificationsOutline className="icon" />

                            </div>
                        </IconContext.Provider>
                    </div>
                    <div className="profile">
                        <div className="gambar">
                            <img src={photo} alt="photoUser" />
                        </div>
                        <div className="namaUser">
                            <p>{namaUser}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
