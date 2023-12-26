import React from 'react';
import './CloudPC.css'

const CloudPC = () =>{
    return (
        // <!-- main container  -->
    <div className="cloudPContainer">
        <div className="cloudPCFirstBox">
        
            <div className="cloudPCTextDiv">
                <h2 className="cloudPCTextEle">Try Windows 365 <br/> Business free for one <br/> month</h2>
                <p className="cloudPCTextEle">After your 1-month free trial, you will be charged the applicable subscription fee (subscription automatically renews). Credit card required. Cancel any time to stop future charges.1</p>
            </div>
    
            <div className="cloudPCImgDiv">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4U8jL?ver=8b6c&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true" alt=""/>
            </div>
        </div>

        {/* <!-- second heading  -->  */}
            <div className="cloudPCSecHeading">
                <h2>Welcome to your Windows 365 Cloud PC</h2>
            </div>
        
            {/* <!-- windows img box  -->  */}
            <div className="cloudPCImgBox">
                <div className="cloudPC2ImgDiv">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4TQxd?ver=30f6&q=90&h=40&b=%23FFFFFFFF&aim=true" alt=""/>
                    <h2>Your Windows in the cloud</h2>
                    <p>Securely stream your Windows experience—including your personalized apps, content, and settings—from the Microsoft cloud to any device with your Windows 365 Cloud PC.</p>
                </div>
                <div className="cloudPC2ImgDiv">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4U5OT?ver=a866&q=90&h=40&b=%23FFFFFFFF&aim=true" alt=""/>
                    <h2>Scale your business with the power of the cloud</h2>
                    <p>Windows 365 can help you grow your business while reducing risk and managing costs.</p>
                </div>
                <div className="cloudPC2ImgDiv">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4U8jS?ver=e6d9&q=90&h=40&b=%23FFFFFFFF&aim=true" alt=""/>
                    <h2>Set up and manage easily</h2>
                    <p>Windows 365 is simple to set up and deliver so you can stay focused on your team and your business.</p>
                </div>
            </div>
        </div>
    )
}

export default CloudPC;