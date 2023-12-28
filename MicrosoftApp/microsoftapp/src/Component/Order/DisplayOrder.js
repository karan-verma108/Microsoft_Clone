import React from "react";
import './DisplayOrder.css'

const DisplayOrder = (props)=>{

    const renderOrderData = ({orderData}) =>{ 
        if(orderData){
            return(
                orderData.map((item)=>{
                    return(
                        <tr className="innerTr" key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.device_name}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>Rs. {item.price}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )
                })
            )
        }
    }

        return(
            <div id="orderCont" className="container">
                <h1>Orders</h1>
                <div className="table table-bordered">
                    <thead>
                        <tr className="outerTr">
                            <th>Order Id</th>
                            <th>Device Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderOrderData(props)}
                    </tbody>
                </div>
            </div>
        )
}

export default DisplayOrder;