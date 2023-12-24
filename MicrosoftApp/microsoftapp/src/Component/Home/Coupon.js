import React from 'react'
import './Coupon.css'

const Coupon = () => {
    
    // for making the coupon appear 2 seconds late
    
    
    // after coupon is closed
    const closeCoupon = () => {
        document.getElementById('coupon').style.visibility = 'hidden';
        for (let index = 0; index < 3; index++) {
            document.getElementsByClassName('newImg')[index].style.opacity = '1'
        }
        document.getElementsByClassName('navbar1')[0].style.opacity = '1'
        document.getElementsByClassName('shopContainer')[0].style.opacity = '1'

    }

    return (
        <div id="coupon">
            <div className="couponContent">
                <img src="https://m.media-amazon.com/images/I/51L40XTsN+L._SX522_.jpg" alt="" />
            </div>

            <div className="infoBox">

                <div className="infoInside">
                    New Surface Pro
                </div>
                <div className="infoInside">
                    Shop Now
                </div>
                <button className="btn-primary resizeBtn">Order Now</button>
            </div>

            <button className="mainBtn" onClick={closeCoupon}>&times;</button>

        </div>
    )
}

export default Coupon