import React from 'react';
import './Windows.css'

const Windows = () =>{
    return(
        // <!-- main container  -->
        <div className="winContainer">
        
            {/* <!-- first box  --> */}
            <div className="winFirstBox">
        
                <div className="winTextDiv">
                    <h2 className="winTextEle">Make the <br/> everyday <br/> easier</h2>
                    <p className="winTextEle">Whether you’re gaming, studying, running a business, or running a household, Windows 11 helps you get it done. Discover streamlined new features for every way you work, learn and play.</p>
                </div>
        
                <div className="winImgDiv">
                    <img src="https://blogs.windows.com/wp-content/uploads/prod/sites/3/2023/05/Windows-Dev-Blog_Windows-Copilot.png" alt=""/>
                </div>
            </div>
        
            {/* <!-- second heading  --> */}
            <div className="winSecHeading">
                <h2>The best Windows yet</h2>
                <p>When there’s a lot to do, let Windows 11 help you get it done.</p>
            </div>
        
            {/* <!-- windows img box  --> */}
            <div className="winImgBox">
                <div className="windowsImgDiv">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1cMh5" alt=""/>
                    <h2>Meet Windows 11</h2>
                    <p>Learn how to use the new features of Windows 11 and see what <br/> makes it the best Windows yet.</p>
                </div>
                <div className="windowsImgDiv">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1cMha" alt=""/>
                    <h2>Upgrade your experience</h2>
                    <p>Learn how to get Windows 11 on your current PC4, or purchase a new PC that can run Windows 11.</p>
                </div>
                <div className="windowsImgDiv">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1cJLa" alt=""/>
                    <h2>Get help</h2>
                    <p>Need help transferring files, resetting a password, or upgrading to Windows 11? Explore the Windows support page for helpful articles on all things Windows. Have a specific issue you’re troubleshooting? Ask your question in the Microsoft Community</p>
                </div>
            </div>
        </div>
    )
}

export default Windows;