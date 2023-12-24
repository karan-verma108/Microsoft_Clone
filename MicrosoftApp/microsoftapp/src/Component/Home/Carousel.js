import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <div id="devCarousel" className="carousel slide opacClass" data-ride="carousel">

            <div className="carousel-inner">

                <div className="item active">

                    <img className="newImg" id="firstImg"
                        src="https://images.hdqwalls.com/wallpapers/windows-11-minimal-4k-iu.jpg" alt="Latest laptop"
                        title="Latest laptop"/>
                </div>

                <div className="item">

                    <img className="newImg" id="secondImg"
                        src="https://wallpaperswide.com/download/laptop_3-wallpaper-3840x2160.jpg" alt="Latest laptop"
                        title="Latest laptop"/>
                </div>

                <div className="item">

                    <img className="newImg" src="https://cdn.mos.cms.futurecdn.net/w8bQcLLeHQHssyNGpWgCZJ.jpeg"
                        alt="Latest laptop" title="Latest laptop"/>
                </div>

                {/* <!-- Navigation using left right icons  --> */}

                <a href="#devCarousel" className="left carousel-control" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>

                <a href="#devCarousel" className="right carousel-control" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>


                {/* <!-- Navigation using dots  --> */}

                <ol className="carousel-indicators">
                    <li className="active" data-target="#devCarousel" data-slide-to="0"></li>
                    <li data-target="#devCarousel" data-slide-to="1"></li>
                    <li data-target="#devCarousel" data-slide-to="2"></li>
                </ol>

            </div>
        </div>
    )
}

export default Carousel