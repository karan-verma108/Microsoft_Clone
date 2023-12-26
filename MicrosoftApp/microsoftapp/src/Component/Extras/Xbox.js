import React, { useEffect, useState } from "react";
import './Xbox.css'
import axios from "axios";

const Xbox = () =>{

    const [xbox, setXbox] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/xbox`)
        .then(res => {setXbox(res.data)})
        .catch((err)=> console.log(err));
    })

    // iterating over the data 

    const renderXbox = (data)=>{
        if(data){
            return data.map((item)=>{
                return(
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
        <h1>Xbox Devices</h1>
        <div className="listingContainer">
            {renderXbox(xbox)}
        </div>
    </>
    )
}

export default Xbox;