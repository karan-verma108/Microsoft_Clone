import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayOrder from './DisplayOrder'

const ViewOrder = () =>{

    const [orders, setOrder] = useState();
    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData);

    useEffect(()=>{
        axios.get(`http://localhost:8000/orders?email=${data.email}`).then((res)=> {setOrder(res.data)})
    })

    return(
        <>
        <DisplayOrder orderData = {orders}/>
        </>
    )
}

export default ViewOrder;