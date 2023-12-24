import React from 'react'
import { Link } from 'react-router-dom'
import './ShopContainer.css'

const ShopContainer = () => {

    // // geolocation 

    // const findLocation = () => {
    //     const temp = document.getElementById('temp')

    //     const success = (position) => {
    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;

    //         const geoAPI = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

    //         fetch(geoAPI, { method: 'GET' })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 let cityName = data.city.name;
    //                 let temperature = data.list[0].temp.day + '°C';
    //                 temp.textContent = `Your city, ${cityName}'s temperature is ${temperature}`
    //             })
    //     }

    //     const error = () => {
    //         temp.textContent = 'Unable to get your location'
    //     }

    //     navigator.geolocation.getCurrentPosition(success, error)
    // }

    // document.getElementById('getTemp').addEventListener('click', findLocation)

    // const visible = document.getElementById('newAlert')
    // const getTemp = document.getElementById('getTemp')

    // const makeVisible = () => {
    //     visible.style.visibility = 'visible'
    //     getTemp.style.visibility = 'hidden'
    // }

    // document.getElementById('getTemp').addEventListener('click', makeVisible)


    return (
        <>
            <div className="shopContainer opacClass">

                <button className="geoLoc" id="getTemp">
                    Temp <br /> °C
                </button>
                <div className="heading">
                    Shop Online
                </div>

                <hr />

                <div className="boxContainer">
                    <div className="box">
                        <img src="https://cdn-icons-png.flaticon.com/512/906/906325.png" alt="Xbox" title="Xbox" />
                        <div className="boxInfo stylish"><a className="anchor" href="/">Buy Xbox</a></div>
                    </div>
                    <div className="box">
                        <img src="https://icon-library.com/images/surface-icon/surface-icon-18.jpg" alt="Surface devices"
                            title="Surface devices" />
                        <div className="boxInfo stylish"><a className="anchor" href="/">Explore Surface Devices</a></div>
                    </div>
                    <div className="box">
                        <img src="https://cdn-icons-png.flaticon.com/512/220/220600.png" alt="Windows 11" title="Windows 11" />
                        <div className="boxInfo stylish"><a className="anchor" href="/">Get Windows 11</a></div>
                    </div>
                    <div className="box">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732222.png" alt="Microsoft 365"
                            title="Microsoft 365" />
                        <div className="boxInfo stylish">
                            <Link to={`/microsoft365`} className="anchor">Choose Microsoft 365</Link>
                            </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ShopContainer