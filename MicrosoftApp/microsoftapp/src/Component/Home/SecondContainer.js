import React from 'react'
import { Link } from 'react-router-dom'
import './SecondContainer.css'

const SecondContainer = () => {
    return (
        <div className="secondContainer">
            <div className="card">
                <Link to={'/surface'} className="anchor" href="/">
                    <img id="surfu" src="https://i.ibb.co/fnGPrPF/surphase-pro.jpg" alt="" />
                    <span className="stylish center">
                        Surface Pro 9
                    </span></Link>
            </div>
            <div className="card">
                <Link to={`/microsoft365`} className="anchor">
                    <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/windows_4jObbWz5vfI_unsplash_0_744.jpg"
                        alt="" />
                    <span className="stylish center">
                        Microsoft 365
                    </span></Link>
            </div>
            <div className="card">
                <Link to={'/xbox'} className="anchor" href="/">
                    <img id="xBox"
                        src="https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png"
                        alt="" />
                    <span className="stylish center">
                        Xbox Series X
                    </span></Link>
            </div>
            <div className="card">
                <Link to={'/xbox'} className="anchor" href="/">
                    <img id="sBox"
                        src="https://images.hindustantimes.com/tech/img/2020/09/15/960x540/Untitled_design_(2)_1600155046355_1600155053071.png"
                        alt="" />
                    <span className="stylish center">
                        Xbox Series S
                    </span></Link>
            </div>
        </div>
    )
}

export default SecondContainer