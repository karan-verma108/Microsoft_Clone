const onloadPage = () =>{
    document.getElementById('coupon').style.visibility = 'visible';
    for (let index = 0; index < 3; index++) {
        document.getElementsByClassName('newImg')[index].style.opacity = '0.7'
    }
    document.getElementsByClassName('navbar1')[0].style.opacity = '0.7'
        document.getElementsByClassName('shopContainer')[0].style.opacity = '0.7'

}


// For light/dark mode on click 

setTimeout(() => {
    onloadPage()
    
}, 2000);


const closeCoupon = () =>{
    document.getElementById('coupon').style.visibility = 'hidden';
    for (let index = 0; index < 3; index++) {
        document.getElementsByClassName('newImg')[index].style.opacity = '1'
    }
    document.getElementsByClassName('navbar1')[0].style.opacity = '1'
        document.getElementsByClassName('shopContainer')[0].style.opacity = '1'
}


const changeMode = () =>{
    let myBody = document.body
    myBody.classList.toggle('myDark')
}

