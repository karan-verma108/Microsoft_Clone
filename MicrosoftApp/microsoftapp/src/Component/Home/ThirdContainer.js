import React from 'react'
import { Link } from 'react-router-dom'
import './ThirdContainer.css'

const ThirdContainer = () => {
    return (
        <div className="thirdContainer">
            <div id="insideContainerOne">

                <div className="commonUpgrade">Upgrade to Windows 365 Cloud PC!</div>
                <button><Link to={'/cloudpc'}>Click here</Link></button>
            </div>

        </div>
    )
}

export default ThirdContainer