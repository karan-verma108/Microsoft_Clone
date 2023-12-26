import React from "react";
import './Microsoft365.css'

const Microsoft365 = () => {

    return (
            <>
            <div className="microsoft365Heading">
                <h5>MICROSOFT 365 FOR HOME</h5>
                <h2>Office is now Microsoft 365</h2>
                <p>Create, share, and collaborate with your favorite apps—all in one place—with <br /> Microsoft 365.</p>
            </div>

            {/* <!-- main section  --> */}
            <div className="main_365_Section">
                <h4 className="main365Head">WHAT'S INCLUDED</h4>
                <h2 className="main365Head">Boost your potential with Microsoft 365</h2>

                {/* <!-- inner main section  --> */}
                <div className="inner_365_Container">

                    {/* <!-- large pic div  --> */}
                    <div className="largeDiv365">
                        <h2 className="largeText365">Apps to manage <br /> your everyday</h2>
                        <p className="largeText365">Get the apps, security, and <br /> storage you need to accomplish <br /> your goals.</p>
                    </div>

                    {/* <!-- small divs inner_365_Container --> */}
                    <div className="smallDivs365">

                        {/* <!-- small divs themselves  --> */}
                        <div className="inner365Divs">
                            <img src="https://cdn-icons-png.flaticon.com/512/906/906313.png" alt="" />
                            <h4 className="innerDiv-pad">Word</h4>
                            <p className="innerDiv-pad">Elevate your writing and create <br /> beautiful documents—anywhere, <br /> anytime.</p>
                        </div>
                        <div className="inner365Divs">
                            <img src="https://cdn-icons-png.flaticon.com/512/906/906310.png" alt="" />
                            <h4 className="innerDiv-pad">Excel</h4>
                            <p className="innerDiv-pad">Turn data into insights with free and <br /> premium spreadsheets.</p>
                        </div>
                        <div className="inner365Divs">
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732223.png" alt="" />
                            <h4 className="innerDiv-pad">Outlook</h4>
                            <p className="innerDiv-pad">Manage your email, calendar, tasks, <br /> and contacts in one location.</p>
                        </div>
                        <div className="inner365Divs">
                            <img src="https://cdn-icons-png.flaticon.com/512/906/906319.png" alt="" />
                            <h4 className="innerDiv-pad">The Microsoft 365 app</h4>
                            <p className="innerDiv-pad">Access your apps and files all in one <br /> place.</p>
                        </div>
                        <div className="inner365Divs">
                            <img src="https://cdn-icons-png.flaticon.com/512/2645/2645895.png" alt="" />
                            <h4 className="innerDiv-pad">Microsoft Defender</h4>
                            <p className="innerDiv-pad">Safeguard your personal data and <br /> devices with an easy-to-use app. <br />
                                Requires a Microsoft 365 Personal or <br /> Family plan.</p>
                        </div>
                        <div className="inner365Divs">
                            <img src="https://cdn.icon-icons.com/icons2/2397/PNG/512/microsoft_onedrive_drive_office_logo_icon_145729.png" alt="" />
                            <h4 className="innerDiv-pad">OneDrive</h4>
                            <p className="innerDiv-pad">Save and share your files and photos, <br /> wherever you go.</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Microsoft365;