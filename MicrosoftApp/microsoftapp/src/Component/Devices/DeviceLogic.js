import React, { useState, useEffect } from "react";
import './Device.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import DeviceDisplay from "./DeviceDisplay";

const DeviceLogic = () => {

    let params = useParams();
    let categoryId = params.category_id;

    const [category_id, setCategory_id] = useState();

    useEffect(()=>{
        sessionStorage.setItem('categoryID', categoryId)
        axios.get(`http://localhost:8000/devices?category_id=${categoryId}`)
        .then((res)=>{
            setCategory_id(res.data);
        })
    },[])

    return (
        <>
            <DeviceDisplay categoryData = {category_id}/>
        </>
    )

}

export default DeviceLogic;