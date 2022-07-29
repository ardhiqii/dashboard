import React from 'react'
import "./switch.css";
export const Switch = ({ check, onToggle }) => {
    return (
        <label className='switch' >
            <input type="checkbox" checked={check} onChange={onToggle} />
            <span className='slider'></span>
        </label>
    )
}
