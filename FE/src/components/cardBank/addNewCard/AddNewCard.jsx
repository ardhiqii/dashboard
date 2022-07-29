import "./addNewCard.css";
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"
const postData = async (data) => {
    const resp = await axios.post("http://localhost:8000/post", {
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}
export const AddNewCard = ({ closed, tmp, added, addNewCard }) => {
    const [nama, setNama] = useState("")
    const [namaBank, setNamaBank] = useState("")
    const [lokasi, setLokasi] = useState("")
    const [nomorBank, setNomorBank] = useState()
    const [currency, setCurrency] = useState("IDR")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tmp = {
            nama,
            namaBank,
            lokasi,
            nomorBank,
            currency
        }
        postData(tmp);
        added(!addNewCard)
        setNama("")
        setNamaBank("")
        setLokasi("")
        setNomorBank()
        setCurrency("")
        closed(!tmp)
        window.location.reload()
    }
    return (
        <div className={"bg_addNewCard" + (!tmp ? ' closed' : '')}>
            <div className={"container_addNewCard" + (!tmp ? ' closed' : '')}>
                <span className="close" onClick={() => { closed(!tmp) }}>X</span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nama">Nama:</label>
                    <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} required />

                    <label htmlFor="namaBank">Nama Bank:</label>
                    <input type="text" id="namaBank" value={namaBank}
                        onChange={(e) => setNamaBank(e.target.value)} required />

                    <label htmlFor="lokasi">Lokasi:</label>
                    <input type="text" id="lokasi" value={lokasi}
                        onChange={(e) => setLokasi(e.target.value)} required />

                    <label htmlFor="nomorBank">Nomor Bank:</label>
                    <input className="nomorBank" type="number" id="nomorBank" value={nomorBank}
                        onChange={(e) => setNomorBank(e.target.value)} required />

                    <label htmlFor="currency">Currency:</label>
                    <select name="currency" id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value="IDR">IDR</option>
                        <option value="USD">USD</option>
                    </select>
                    <button>Add New Card</button>
                </form>
            </div>
        </div>
    )
}
