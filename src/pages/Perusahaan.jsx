import React, { useState, useEffect } from 'react'
import { Switch } from '../components/switchToggle/Switch'
import "./perusahaan.css"
import { BiPencil } from "react-icons/bi"
export const Perusahaan = () => {
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
    const handleEditProfile = () => {
        setChangingProfile(true);
    }
    const changedProfile = () => {
        setChangingProfile(false);
        setDataProfile(newDataProfile);
    }
    useEffect(() => {
        active ? setNewDataProfile({ ...newDataProfile, status: "Aktif" }) : setNewDataProfile({ ...newDataProfile, status: "Tidak Aktif" })
    }, [active])
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
        </div>
    )
}
