import React, { useEffect, useState } from "react";
import './Surface.css'
import axios from "axios";

const Surface = () =>{

    const [surface, setSurface] = useState([])

    // getting the data from api 
    useEffect(()=>{
        axios.get(`http://localhost:8000/pcdevice`)
        .then(res => {setSurface(res.data)})
        .catch((err) => console.log(err));
    })

    // iterating over obtained data 
    const renderSurface = (data)=>{
        if(data){
            return data.map((item)=>{
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

    return(
        <>
            <h1>Surface Devices</h1>
            <div className="listingContainer">
                {renderSurface(surface)}
            </div>
        </>
    )
}

export default Surface;