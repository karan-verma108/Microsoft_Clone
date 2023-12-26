import React from 'react'
import './SocialContainer.css'

const SocialContainer = () => {
    return (
        <div className="socialContainer">
            <div className="socialBox">
                <div className="socialDiv" id="follow">
                    <a href="/">
                        Follow Microsoft
                    </a>
                </div>
                <div className="socialDiv">
                    <a href="https://www.facebook.com/MicrosoftIndia" target='blank'>
                        <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="Facebook icon" title="Facebook" />
                    </a>
                </div>
                <div className="socialDiv">
                    <a href="https://twitter.com/microsoftindia" target='blank'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="X icon" title="X icon" />
                    </a>
                </div>
                <div className="socialDiv">
                    <a href="https://www.youtube.com/user/IndiaMicrosoftVideos" target='blank'>
                        <img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" alt="YouTube icon"
                            title="YouTube icon" />
                    </a>
                </div>
            </div>

            <div id="jump">
                <a href="/">
                    <i className="glyphicon glyphicon-arrow-up"></i>
                    Back to top
                </a>
            </div>
        </div>
    )
}

export default SocialContainer