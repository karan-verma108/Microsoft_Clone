import React from "react";
import { Link } from "react-router-dom";

const DeviceDisplay = (props) => {

    const renderCategoryData = ({ categoryData }) => {
        if (categoryData) {
            if (categoryData.length > 0) {
                return categoryData.map((item) => {
                    return (
                        <div key={item.id} className="listingBox">
                            <img src={item.image} alt="pc" />
                            <div className="listing-box-inside">
                            <Link key={item.id} to={`/devicedetails?id=${item.id}`}>
                                <h3 className="font-style">Name : {item.name} </h3>
                                </Link>
                                <h4 className="font-style">Price : {item.price}</h4>
                                <h4 className="font-style">Average Rating : {item.average_rating}★ | {item.rating_text}</h4>
                                <p className="font-style">Info. | {item.info}</p>
                            </div>
                        </div>
                    )
                })
            }
            else {
                return (<h1>No data found</h1>)
            }
        }else{
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
            <h1>Select to continue</h1>
            <div className="listingContainer">
                {renderCategoryData(props)}
            </div>
        </>
    )

}

export default DeviceDisplay;