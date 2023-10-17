const onloadPage = () => {
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


const closeCoupon = () => {
    document.getElementById('coupon').style.visibility = 'hidden';
    for (let index = 0; index < 3; index++) {
        document.getElementsByClassName('newImg')[index].style.opacity = '1'
    }
    document.getElementsByClassName('navbar1')[0].style.opacity = '1'
    document.getElementsByClassName('shopContainer')[0].style.opacity = '1'
}


const changeMode = () => {
    let myBody = document.body
    myBody.classList.toggle('myDark')
}




// Getting the user's temperature and location 

// const findLocation=()=>{
//     const temp = document.getElementById('temp')

//     const success=(position)=>{
//         console.log(position);
//     }

//     const error=()=>{
//         temp.textContent = 'Unable to get your location'
//     }


//     navigator.geolocation.getCurrentPosition(success, error)
// }

// document.getElementById('getTemp').addEventListener('click', findLocation)

// const geolocation = () => {
//     let x = document.getElementById('temp')

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }
//     else {
//         x.innerHTML = 'Geo location not supported on your browser!'
//     }
// }

// const showPosition = (data) => {
//     let lat = data.coords.latitude;
//     let lon = data.coords.longitude;

//     x.innerHTML = `Latitude is ${lat} and longitude is ${lon}`

//     const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

//     //api calling
//     fetch(url, { method: 'GET' })

//         // returns a promise 
//         .then((res) => res.json())
        
//         // resolving the promise 
//         .then((data) => {
//             let cityName = data.city.name;
//             let tempr = data.list[0].temp.day + '°C';
//             x.innerHTML = `The weather of ${cityName} is ${tempr}`
//         })
// }