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
                        <Link to={'/surface'} className="footA" href="/">Surface Pro 9</Link>
                    </div>

                    <div className="footContent">
                        <Link to={'/surface'} className="footA" href="/">Surface Laptop 5</Link>
                    </div>

                    <div className="footContent">
                        <Link to={'/surface'} className="footA" href="/">Surface Laptop Studio</Link>
                    </div>

                    <div className="footContent">
                        <Link to={'/surface'} className="footA" href="/">Surface Laptop Go 2</Link>
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
                        <Link to={'/support'} className="footA" href="/">Microsoft Store Support</Link>
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
                        <Link to={'/microsoft365'} className="footA" href="/">Microsoft in education </Link>
                    </div>

                    <div className="footContent">
                        <a className="footA" href="/"> Devices for education </a>
                    </div>

                    <div className="footContent">
                        <Link to={'/teams'} className="footA" href="/">Microsoft Teams for Education </Link>
                    </div>

                    <div className="footContent">
                        <Link to={'/microsoft365'} className="footA" href="/">Microsoft 365 Education </Link>
                    </div>

                    <div className="footContent">
                        <Link to={'/microsoft365'} className="footA" href="/">Office Education </Link>
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
                        <Link to={'/cloudpc'} className="footA" href="/">Microsoft Cloud</Link>
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
                        <Link to={'/teams'} className="footA" href="/">Microsoft Teams</Link>
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
                        <Link to={'/microsoft365'} className="footA" href="/">Microsoft Learn</Link>
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
                        <span className="footA" href="/">English (India)</span>
                    </div>

                    <div className="footLeftIn">
                        <i className="glyphicon glyphicon-check ico"></i>
                        <span className="footA" href="/">Your Privacy Choices</span>
                    </div>

                </div>

                <div className="rightFoot">

                    <div className="footRightIn">
                        <span className="footA" href="/">Contact Microsoft</span>
                    </div>

                    <div className="footRightIn">
                        <span className="footA" href="/">Privacy</span>
                    </div>

                    <div className="footRightIn">
                        <span className="footA" href="/">Terms of use</span>
                    </div>

                    <div className="footRightIn">
                        <span className="footA" href="/">Trademarks</span>
                    </div>

                    <div className="footRightIn">
                        <span className="footA" href="/">About our ads</span>
                    </div>

                    <div className="footRightIn">
                        <span className="footA" href="/">Microsoft &copy; 2023</span>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer