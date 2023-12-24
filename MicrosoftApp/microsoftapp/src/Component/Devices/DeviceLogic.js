import React, { useState, useEffect } from "react";
import './Device.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import DeviceDisplay from "./DeviceDisplay";

const DeviceLogic = () => {

    const [category_id, setCategory_id] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/devices`)
            .then(res => { setCategory_id(res.data) })
            .catch((err) => console.log(err))
    })

    // iterating over the data 

    const renderCategory = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div key={item.id} className="listingBox">
                        <img src={item.image} alt="pc" />
                        <div className="listing-box-inside">
                            <h3 className="font-style">Name : {item.name} </h3>
                            <h4 className="font-style">Price : {item.price}</h4>
                            <h4 className="font-style">Average Rating : {item.average_rating}★ | {item.rating_text}</h4>
                            <p className="font-style">Info. | {item.info}</p>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <>
            <h1>All Devices</h1>
            <div className="listingContainer">
                {renderCategory(category_id)}
            </div>
        </>
    )

}

export default DeviceLogic;