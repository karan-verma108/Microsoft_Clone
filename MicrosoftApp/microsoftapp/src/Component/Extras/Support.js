import React from "react";
import './Support.css'

const Support = () =>{
    return (
        // <!-- main container  -->
    <div className="supportContainer">

        <div className="supportFirstBox">
            <h2>Welcome to Microsoft Support</h2>
        </div>
        
        <h2 id="exploreH2">Explore</h2>

        {/* <!-- support explore container  --> */}
        <div className="supportExploreContainer">

        <div className="supportExploreDiv">
            <div className="supportExploreImg">
                <img src="https://support.content.office.net/en-us/media/2fcacd1f-1fc3-491b-a0a1-10efef238958.jpg" alt=""/>
            </div>
            <div className="supportExploreText">
                <h3>Generate art with Paint Cocreator</h3>
                <p>Create amazing artwork with just a few words. Microsoft Paint Cocreator will help you unleash your creativity and make your own artworks with the help of AI.</p>
            </div>
        </div>
        <div className="supportExploreDiv">
            <div className="supportExploreImg">
                <img src="https://support.content.office.net/en-us/media/e1da0671-a934-43e7-b61d-f6f0ac42965c.png" alt=""/>
            </div>
            <div className="supportExploreText">
                <h3>Achieve more with AI in Windows</h3>
                <p>Windows is the first PC platform to provide centralized AI assistance. Learn how to achieve and create more with Copilot in Windows.</p>
            </div>
        </div>
        <div className="supportExploreDiv">
            <div className="supportExploreImg">
                <img src="https://support.content.office.net/en-us/media/be822cca-c6ba-478d-8885-171897317c74.png" alt=""/>
            </div>
            <div className="supportExploreText">
                <h3>Office is now Microsoft 365</h3>
                <p>The home for your favorite tools and content. Now with new ways to help you find, create, and share your content, all in one place.</p>
            </div>
        </div>
        <div className="supportExploreDiv">
            <div className="supportExploreImg">
                <img src="https://support.content.office.net/en-us/media/e8353844-a8a1-4be1-8fca-18c6281bfb14.jpg" alt=""/>
            </div>
            <div className="supportExploreText">
                <h3>Microsoft 365 Training Center</h3>
                <p>Get productive quickly with these Microsoft 365 videos, tutorials, and resources.</p>
            </div>
        </div>

        </div>
    </div>
    )
}

export default Support;