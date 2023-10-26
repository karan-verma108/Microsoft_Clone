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
    const myBody = document.body
    const myNavi = document.getElementsByClassName('navbar1')[0];
    const footer = document.getElementsByClassName('footer')[0];
    
    myBody.classList.toggle('myDark')
    myNavi.classList.toggle('myDark')
    footer.classList.toggle('myDark')
}




// geolocation 

const findLocation = () => {
    const temp = document.getElementById('temp')

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoAPI = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

        fetch(geoAPI, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let cityName = data.city.name;
                let temperature = data.list[0].temp.day + '°C';
                temp.textContent = `Your city, ${cityName}'s temperature is ${temperature}`
            })
    }

    const error = () => {
        temp.textContent = 'Unable to get your location'
    }

    navigator.geolocation.getCurrentPosition(success, error)
}

document.getElementById('getTemp').addEventListener('click', findLocation)

const visible = document.getElementById('newAlert')
const getTemp = document.getElementById('getTemp')

const makeVisible = () => {
    visible.style.visibility = 'visible'
    getTemp.style.visibility = 'hidden'
}

document.getElementById('getTemp').addEventListener('click', makeVisible)
