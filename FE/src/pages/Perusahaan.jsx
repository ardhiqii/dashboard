import React, { useState, useEffect } from 'react'
import { Switch } from '../components/switchToggle/Switch'
import "./perusahaan.css"
import { BiPencil, BiBuildingHouse, BiWrench } from "react-icons/bi"
import { RiHome2Line } from "react-icons/ri"
import { FiShare2 } from "react-icons/fi"
import { IconContext } from 'react-icons';
import { Cardbank } from '../components/cardBank/Cardbank'
import { AddNewCard } from '../components/cardBank/addNewCard/AddNewCard'
import axios from "axios"

export const Perusahaan = () => {
    const relasi = [{
        number: 20,
        type: "Memiliki"
    }, {
        number: 108,
        type: "Menggunakan"
    }, {
        number: 67,
        type: "Meminjam"
    }]
    const aktivitas = [{
        comment: "asdfanfliawfalwiuefawiefbaebawfawe",
        time: "Hari ini, 06:00"
    }, {
        comment: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend le",
        time: "Kemaren, 06:00"
    }]
    const tmpDataProfile = {
        nama: "namaPerusahaan",
        layanan: "Layanan IT",
        status: "Aktif",
        singkatan: "NP",
        alamat: "Jl. Ayaya No.420, Isekai",
        pc: "John Doe",
        tanggalPKP: "03 Maret 2021",
        email: "np@isekai.wb",
        noTlp: "123-4567-8910",
        web: "NaN"
    }
    const [dataProfile, setDataProfile] = useState(tmpDataProfile)
    const [newDataProfile, setNewDataProfile] = useState(tmpDataProfile);
    const [changingProfile, setChangingProfile] = useState(false)
    const [active, setActive] = useState((tmpDataProfile.status === "Aktif"));
    const [isModelOpen, setModelOpen] = useState(false);
    const [dataUserCard, setDataUserCard] = useState({})
    const [isLoading, setLoading] = useState(true);
    const [addNewCard, setAddNewCard] = useState(false)
    const handleEditProfile = () => {
        setChangingProfile(true);
    }
    const changedProfile = () => {
        setChangingProfile(false);
        setDataProfile(newDataProfile);
    }
    const fetchData = async () => {
        const res = await axios.get("http://localhost:8000/")
        const data = await res.data
        setDataUserCard(data);
        setLoading(false)
    }
    useEffect(() => {
        active ? setNewDataProfile({ ...newDataProfile, status: "Aktif" }) : setNewDataProfile({ ...newDataProfile, status: "Tidak Aktif" })
    }, [active])
    useEffect(() => {
        fetchData()
    }, [addNewCard])
    console.log(relasi);
    console.log(dataUserCard);
    return (
        <div className="container_perusahaan">
            <div className="profile_perusahaan">
                <img src="/images/building.webp" alt="" className='backgroundProfile' />
                <div className="container_profile">
                    <div className="topProfile">
                        <div className="logoPerusahaan">
                            <img src="/images/logoProfile.png" alt="" />
                        </div>
                        <div className="keterangan">
                            <h2 className='nama'>{dataProfile.nama}</h2>
                            <span>{dataProfile.layanan}</span>
                        </div>
                        <div className="editProfile">
                            {changingProfile ? (<>
                                <button onClick={changedProfile}>Done</button>
                            </>) : (<>
                                <button onClick={handleEditProfile}>
                                    <BiPencil className="penIcon" />
                                    Sunting Profile</button>
                            </>)}

                        </div>
                    </div>
                    <div className="detailProfile">
                        {changingProfile ? (<>
                            <div className="box">
                                <span>Status Perusahaan</span>
                                <div className="toggleAktif">
                                    <p>{newDataProfile.status}</p>
                                    <Switch check={active} onToggle={() => setActive(!active)} />
                                </div>
                            </div>
                            <div className="box">
                                <span>Singkatan</span>
                                <input type="text" id="singkatan" placeholder={dataProfile.singkatan} value={newDataProfile.singkatan} onChange={(e) => setNewDataProfile({ ...newDataProfile, singkatan: e.target.value })} />
                            </div>
                            <div className="box">
                                <span>Alamat Perusahaan</span>
                                <input type="text" id="singkatan" placeholder={dataProfile.alamat} value={newDataProfile.alamat} onChange={(e) => setNewDataProfile({ ...newDataProfile, alamat: e.target.value })} />
                            </div>
                            <div className="box">
                                <span>Penanggung Jawab (PIC)</span>
                                <input type="text" id="singkatan" placeholder={dataProfile.pc} value={newDataProfile.pc} onChange={(e) => setNewDataProfile({ ...newDataProfile, pc: e.target.value })} />
                            </div>
                            <div className="box">
                                <span>Tanggal PKP</span>
                                <input type="text" id="singkatan" placeholder={dataProfile.tanggalPKP} value={newDataProfile.tanggalPKP} onChange={(e) => setNewDataProfile({ ...newDataProfile, tanggalPKP: e.target.value })} />
                            </div>
                            <div className="box">
                                <span>E-mail</span>
                                <input type="text" id="singkatan" placeholder={dataProfile.email} value={newDataProfile.email} onChange={(e) => setNewDataProfile({ ...newDataProfile, email: e.target.value })} />
                            </div>
                            <div className="box">
                                <span>No. Telp</span>
                                <input type="text" id="singkatan" placeholder={dataProfile.noTlp} value={newDataProfile.noTlp} onChange={(e) => setNewDataProfile({ ...newDataProfile, noTlp: e.target.value })} />
                            </div>
                            <div className="box">
                                <span>Situs Web</span>
                                <input type="text" id="singkatan" placeholder={dataProfile.web} value={newDataProfile.web} onChange={(e) => setNewDataProfile({ ...newDataProfile, web: e.target.value })} />
                            </div>



                        </>) : (<>
                            <div className="box">
                                <span>Status Perusahaan</span>
                                <div className="toggleAktif">
                                    <p>{dataProfile.status}</p>
                                    <Switch check={active} />
                                </div>
                            </div>
                            <div className="box">
                                <span>Singkatan</span>
                                <p>{dataProfile.singkatan}</p>
                            </div>
                            <div className="box">
                                <span>Alamt Perusahaan</span>
                                <p>{dataProfile.alamat}</p>
                            </div>
                            <div className="box">
                                <span>Penanggung Jawab (PIC)</span>
                                <p>{dataProfile.pc}</p>
                            </div>
                            <div className="box">
                                <span>Tanggal PKP</span>
                                <p>{dataProfile.tanggalPKP}</p>
                            </div>
                            <div className="box">
                                <span>E-mail</span>
                                <p className='greenText'>{dataProfile.email}</p>
                            </div>
                            <div className="box">
                                <span>No. Telp</span>
                                <p className='greenText'>{dataProfile.noTlp}</p>
                            </div>
                            <div className="box">
                                <span>Situs Web</span>
                                <a href="">{dataProfile.web}</a>
                            </div>
                        </>)}
                    </div>
                </div>
            </div>
            <div className="container_right">
                <div className="container_lokasi">
                    <div className="upper">
                        <h2>Lokasi</h2>
                        <span>Lihat semua</span>
                    </div>
                    <div className="under">
                        <IconContext.Provider value={{ size: "2em", color: "white" }}>
                            <div className="greenBox">
                                <BiBuildingHouse />
                                <div className="detail">
                                    <p>20</p>
                                    <span>Induk</span>
                                </div>
                            </div>
                            <div className="greenBox">
                                <BiWrench />
                                <div className="detail">
                                    <p>3</p>
                                    <span>Sub Lokasi Level 1</span>
                                </div>
                            </div>
                            <div className="greenBox">
                                <RiHome2Line />
                                <div className="detail">
                                    <p>1</p>
                                    <span>Sub Lokasi Level 2</span>
                                </div>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="container_middle">
                    <div className="container_middle_left">
                        <div className="container_white akun_bank">
                            {isModelOpen ? <AddNewCard closed={setModelOpen} tmp={isModelOpen} added={setAddNewCard} addNewCard={addNewCard} /> : null}
                            <div className="upper">
                                <h2>Akun Bank</h2>
                                <button onClick={() => { setModelOpen(!isModelOpen) }}>+ Tambah Akun Bank</button>
                            </div>
                            <div className="cardList">
                                {isLoading ? <>Loading</> :
                                    dataUserCard.map((card, i) => (
                                        <Cardbank dataCard={card} key={i} />
                                    ))}
                            </div>

                        </div>
                        <div className="container_white relasi">
                            <div className="upper">
                                <h2>Relasi</h2>
                                <span>Lihat semua</span>
                            </div>
                            <div className="under">
                                {relasi.map((data, i) => (
                                    <div className="detail_relasi" key={i}>
                                        <div className="icon"><FiShare2 /></div>
                                        <div className="detail_data">
                                            <p>{data.number}</p>
                                            <span>{data.type}</span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container_white aktivitas">
                        <div className="upper">
                            <h2>Aktivitas</h2>
                        </div>
                        <div className="under">
                            {aktivitas.map((data, i) => (
                                <div className="detail_aktivitas" key={i}>
                                    <p>{data.comment}</p>
                                    <span>{data.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
