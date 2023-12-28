import React, {useState} from "react";
import './PlaceOrder.css'
import { useParams, useNavigate, Link } from "react-router-dom";

const PlaceOrder = () =>{

    let params = useParams();
    let navigate = useNavigate();

    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData);

    let initialValues = {
        id : Math.floor(Math.random()*1000000),
        device_name : params.deviceName,
        name : data.name,
        email : data.email,
        price : Math.floor(Math.random()*1000),
        phone : data.phone,
        address : 'h no. 4544 delhi'
    }

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const checkout = () =>{
        console.log(values);
        fetch(`http://localhost:8000/placeOrders`, {
            method : 'POST',
            headers : {
                'accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(values)
        })
        .then(navigate(`/orders`))
    }

    return (
        <>
        <h2 className="finalH2">Place your order</h2>
        <div id="newCont" className="container">
            <hr/>
            <div id="newPanel" className="panel panel-primary">
                <div id="panHeading" className="panel-heading">
                    <h2>Order for {params.deviceName}</h2>
                </div>
                <div id="bodyPan" className="panel-body">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor= 'fname' className="control-label lblText">Name</label>
                            <input className="form-control inptText" id="fname" name="name" value={values.name} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor= 'email' className="control-label lblText">Email</label>
                            <input className="form-control inptText" id="email" name="email" value={values.email} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor= 'phone' className="control-label lblText">Phone</label>
                            <input className="form-control inptText" id="phone" name="phone" value={values.phone} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor= 'address' className="control-label lblText">Address</label>
                            <input className="form-control inptText" id="address" name="address" value={values.address} onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h2>Total price is : {values.price}</h2>
                        </div>
                    </div>
                    <button className="btn btn-success finalBtn" onClick={checkout}>Submit</button>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default PlaceOrder;