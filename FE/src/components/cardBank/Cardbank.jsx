import "./cardbank.css"
import React from 'react'

export const Cardbank = ({ dataCard }) => {
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
                        <button className="delete">delete</button>
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
