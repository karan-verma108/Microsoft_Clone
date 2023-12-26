import React from "react";
import './Teams.css';

const Teams = () =>{
    return(
        <div className="teamsContainer">
        {/* <!-- main pic div  --> */}
        <div className="teamsMainDiv">
            <div className="teamsTextDiv">
                <h2>The new Microsoft <br/> Teams is now <br/> generally available</h2>
                <p>Collaborate more effectively with a faster, simpler, <br/>
                    smarter, and more flexible Teams.</p>
            </div>
        </div>

        {/* <!-- second heading div  --> */}
        <div className="teamSecondHead">
            <h1>More is possible with Teams</h1>
            <p>Simplify collaboration with Teams to level up your work, connect with others for greater impact, and scale your business to achieve more.</p>
        </div>

        {/* <!-- teamsPicContainer --> */}
        <div className="teamsPicContainer">
            <div className="teamsPicBox">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Audience-Enterprise-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=100&fmt=png-alpha&fit=constrain" alt=""/>
                <h3>Enterprise</h3>
            </div>
            <div className="teamsPicBox">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Audience-Business-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=100&fmt=png-alpha&fit=constrain" alt=""/>
                <h3>Business</h3>
            </div>
            <div className="teamsPicBox">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Audience-Home-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=100&fmt=png-alpha&fit=constrain" alt=""/>
                <h3>Home</h3>
            </div>
            <div className="teamsPicBox">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Audience-Education-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=100&fmt=png-alpha&fit=constrain" alt=""/>
                <h3>Education</h3>
            </div>
        </div>

        {/* <!-- teams last section  --> */}

        <div className="teamsLastHead">
            <h1>Explore the latest Teams news</h1>
        </div>

        <div className="teamsBigSection">
            <div id="leftTeams" className="innerTeamsBox">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/TeamsSizzle-Ignite_tbmnl_en-us?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1306&hei=1306&qlt=100&fmt=png-alpha&fit=constrain" alt=""/>
                <h2>Get ready for the future of work with Microsoft Teams</h2>
                <p>As the workplace evolves, empower your organization with next-generation AI capabilities in Teams—the smart place to work. Get more done, connect with colleagues, and use powerful AI to transform your work.</p>
            </div>
            <div id="rightTeams" className="innerTeamsBox">
                <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/lakehouse_context_001_web_blade?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=764&hei=10000&qlt=100&fmt=png-alpha&fit=constrain" alt=""/>
                <h2>Introducing Microsoft Mesh Preview</h2>
                <p>Connect your distributed workforce in new ways with Microsoft Mesh, an immersive 3D experience for work.1 Enable meetings and events that feel more like face-to-face interactions, helping you elevate employee engagement, strengthen teamwork, and advance your business.</p>
            </div>
        </div>
    </div>
    )
}

export default Teams;