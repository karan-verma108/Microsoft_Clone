const onloadPage = () =>{
    document.getElementById('coupon').style.visibility = 'visible';
    document.body.style.opacity = '0.8'

}

const closeCoupon = () =>{
    document.getElementById('coupon').style.visibility = 'hidden';
    document.body.style.opacity = '1'
}

setTimeout(() => {
    onloadPage()
    
}, 2000);

const changeMode = () =>{
    let myBody = document.body
    myBody.classList.toggle('myDark')
}