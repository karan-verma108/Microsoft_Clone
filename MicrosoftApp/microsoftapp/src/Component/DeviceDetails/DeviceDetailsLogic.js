import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate, Link } from "react-router-dom";
import './DeviceDetails.css'
import axios from "axios";

const DeviceDetails = () => {

    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let [deviceDetails, setDeviceDetails] = useState();
    let [categoryID] = useState(sessionStorage.getItem('categoryID'))

    let deviceName = searchParams.getAll('id')

    const device_Details = async () => {
        const d_Data = await axios.get(`http://localhost:8000/alldevice?id=${deviceName}`)
        setDeviceDetails(d_Data.data[0]);
    }

    useEffect(() => {
        device_Details()
    }, [])

    const proceed = () =>{
        navigate(`/placeOrder/${deviceDetails.name}`)
    }

    const renderDetails = () => {
        if (deviceDetails) {
            return (
                <div className="detailsContainer">
                    <div className="detailsImgDiv">
                        <img src={deviceDetails.image} alt=""/>
                    </div>

                    <div className="detailsInfoContainer">

                        <div className="detailsInfoDiv">
                            <h2>{deviceDetails.name}</h2>
                            <span>Average rating : {deviceDetails.average_rating}★ </span>
                            <h2>Price : {deviceDetails.price} </h2>
                            <p>Details : {deviceDetails.info} </p>
                        </div>

                        <hr/>

                            <div className="detailsBtnDiv">
                                <Link to={`/devices/${categoryID}`} id="redBtn" className="btn btn-danger backBtn">
                                    Back
                                </Link>

                                <div onClick={proceed} id="greenBtn" className="btn btn-success proceedBtn">
                                    Proceed
                                </div>
                            </div>
                    </div>
                </div>
            )
        }
        else{
            return( 
                <div>
                <h2>Loading...</h2>
                <img src= 'https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif' alt='loading' />
                </div>
            )
        }
    }

    return (
        <>
            {renderDetails(deviceDetails)}
        </>
    )
}

export default DeviceDetails;