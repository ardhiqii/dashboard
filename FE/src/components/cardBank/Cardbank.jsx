import "./cardbank.css"
import React from 'react'
import axios from "axios"
export const Cardbank = ({ dataCard }) => {
    const deleteCard = ({ id, nama, namaBank, lokasi, nomorBank, currency }) => {
        const deleted = axios.delete("http://localhost:8000/delete", {
            data: {
                id
            }
        })
        window.location.reload()
    }
    return (
        <div className="card">
            <div className="colorCard">
                <h1>VISA</h1>
            </div>
            <div className="detailCard">
                <div className="upper">
                    <span>{dataCard.namaBank}{dataCard.lokasi ? ", " + dataCard.lokasi : ""}</span>
                    <div className="buttons">
                        <button className="edit">edit</button>
                        <button className="delete" onClick={() => { deleteCard(dataCard) }}>delete</button>
                    </div>
                </div>
                <div className="under">
                    <span>{dataCard.nomorBank} - {dataCard.nama}</span>
                    <span>{dataCard.currency}</span>
                </div>

            </div>
        </div>
    )
}
