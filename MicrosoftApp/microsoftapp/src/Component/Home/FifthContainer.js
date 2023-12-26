import React from 'react'
import { Link } from 'react-router-dom'
import './FifthContainer.css'

const FifthContainer = () => {
    return (
        <div className="fifthContainer">

            <div id="insideContainerTwo">

                <div className="commonUpgrade" id="upgradeTwo">Upgrade to Windows 11 now!</div>
                <button><Link to={'/windows'}>Click here</Link></button>

            </div>

        </div>
    )
}

export default FifthContainer