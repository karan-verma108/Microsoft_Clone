import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footID" className="footer">

            {/* <!-- Footer inside container  --> */}

            <div id="footContainerInside">


                {/* <!-- First foot box  --> */}

                <div className="footBox">

                    <div className="footContent">
                        <h4>What's new</h4>
                    </div>

                    <div className="footContent">
                        <Link to={`/microsoft365`} className="footA" href="/">Microsoft 365</Link>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Games</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Surface Pro 9</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Surface Laptop 5</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Surface Laptop Studio</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Surface Laptop Go 2</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Windows 11 apps</a>
                    </div>
                </div>

                {/* <!-- Second foot box  --> */}

                <div className="footBox">
                    <div className="footContent">
                        <h4>Microsoft store</h4>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Account profile </a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Download center</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft Store Support</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Returns</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Order Tracking</a>
                    </div>
                </div>

                {/* <!-- Third foot box  --> */}

                <div className="footBox">
                    <div id="fume" className="footContent">
                        <h4>Education</h4>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft in education </a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/"> Devices for education </a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft Teams for Education </a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft 365 Education </a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Office Education </a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Educator training and development </a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Deals for students and parents </a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Azure for students </a>
                    </div>
                </div>

                {/* <!-- Fourth Foot box  --> */}

                <div className="footBox">
                    <div className="footContent">
                        <h4>Business</h4>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft Cloud</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Devices Security</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Azure</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Dynamics 365</a>
                    </div>

                    <div className="footContent">
                        <Link to={`/microsoft365`} className="footA" href="/">Microsoft 365</Link>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft Advertising</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft Industry</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft Teams</a>
                    </div>

                </div>

                {/* <!-- Fifth foot box  --> */}

                <div className="footBox">
                    <div className="footContent">
                        <h4>Developer & IT</h4>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Developer Center</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Documentation</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft Learn</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Microsoft Tech Community</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/"> Azure Marketplace</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">AppSource</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/"> Microsoft Power Platform</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Visual Studio</a>
                    </div>

                </div>

                {/* <!-- Sixth foot box  --> */}

                <div className="footBox">
                    <div className="footContent">
                        <h4>Company</h4>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Careers</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">About Microsoft</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Company news</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Privacy at Microsoft</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Investors</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Security</a>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/">Sustainability</a>
                    </div>

                </div>

            </div>

            {/* <!-- Footer outside container  --> */}

            <div id="footContainerOutside">

                <div className="leftFoot">

                    <div className="footLeftIn">
                        <i className="glyphicon glyphicon-globe ico"></i>
                        <a className="footA" href="/">English (India)</a>
                    </div>

                    <div className="footLeftIn">
                        <i className="glyphicon glyphicon-check ico"></i>
                        <a className="footA" href="/">Your Privacy Choices</a>
                    </div>

                </div>

                <div className="rightFoot">

                    <div className="footRightIn">
                        <a className="footA" href="/">Contact Microsoft</a>
                    </div>

                    <div className="footRightIn">
                        <a className="footA" href="/">Privacy</a>
                    </div>

                    <div className="footRightIn">
                        <a className="footA" href="/">Terms of use</a>
                    </div>

                    <div className="footRightIn">
                        <a className="footA" href="/">Trademarks</a>
                    </div>

                    <div className="footRightIn">
                        <a className="footA" href="/">About our ads</a>
                    </div>

                    <div className="footRightIn">
                        <a className="footA" href="/">Microsoft &copy; 2023</a>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer