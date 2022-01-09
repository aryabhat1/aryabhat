import React from 'react'
import { ThemeContext } from '../../context'
import { useContext } from 'react';
import './Toggle.css'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' })
    }

    return (
        <div className='toggleclass'>
            <img src={require("../../img/sun.png")} alt="sun image" srcset="" className='t-icon' />

            <img src={require("../../img/moon.png")} alt="moon image" srcset="" className='t-icon' />

            <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 10 : 60}}>

            </div>

        </div>
    )
}

export default Toggle
