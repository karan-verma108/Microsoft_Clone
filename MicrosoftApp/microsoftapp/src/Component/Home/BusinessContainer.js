import React from 'react'
import {Link} from 'react-router-dom';
import './BusinessContainer.css'

const BusinessContainer = () => {
    return (
        <div className="businessContainer">

            <div className="card newCard  newHeight">
                <Link to={'/surface'} className="anchor" href="/">
                    <img id="sTwo" src="https://i.pcmag.com/imagery/articles/00Dt4peUWCWaQlgiswLQtpI-10.jpg"
                        alt="Surface laptop studio 2 for business" />
                    <div className="headNPara">

                        <span className="jalwa">
                            Surface Laptop Studio 2 for Business
                        </span>
                        <p className="fnt">Reimagine the ways you do business with the most powerful Surface for Business yet,
                            featuring three flexible modes. </p>

                    </div>
                </Link>
            </div>

            <div className="card newCard newHeight">
                <Link to={'/surface'} className="anchor" href="/">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/AX/YV/TI/79270826/1.jpg"
                        alt="Surface laptop 3 for business" />
                    <div className="headNPara">

                        <span className="jalwa">
                            Surface Laptop Go 3 for Business
                        </span>
                        <p className="fnt">Multitask on the go with a lightweight laptop that has the performance and battery
                            life your business needs. </p>

                    </div>
                </Link>
            </div>

            <div className="card newCard newHeight">

                <Link to={'/windows'} className="anchor" href="/">
                    <img id="win11" src="https://m.media-amazon.com/images/I/6155z7Z2DjL.jpg" alt="Windows 11 for business" />
                    <div className="headNPara">

                        <span className="jalwa">
                            Windows 11 for Business
                        </span>
                        <p className="fnt">Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.
                        </p>

                    </div>
                </Link>
            </div>


            <div className="card newCard newHeight">
                <Link to={'/cloudpc'} className="anchor" href="/">
                    <img id="win365" src="https://i.ytimg.com/vi/NEKe1NW3sLc/maxresdefault.jpg" alt="Windows 365 cloud PC" />
                    <div className="headNPara">

                        <span className="jalwa">
                            Windows 365 Cloud PC
                        </span>
                        <p className="fnt">Securely stream your Windows experience from the Microsoft cloud to any device. </p>

                    </div>
                </Link>
            </div>

        </div>
    )
}

export default BusinessContainer