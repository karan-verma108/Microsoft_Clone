const onloadPage = () => {
    document.getElementById('coupon').style.visibility = 'visible';
    for (let index = 0; index < 3; index++) {
        document.getElementsByClassName('newImg')[index].style.opacity = '0.7'
    }
    document.getElementsByClassName('navbar1')[0].style.opacity = '0.7'
    document.getElementsByClassName('shopContainer')[0].style.opacity = '0.7'

}


// for making the coupon appear 2 seconds late
setTimeout(() => {
    onloadPage()
    
}, 2000);

// after coupon is closed
const closeCoupon = () => {
    document.getElementById('coupon').style.visibility = 'hidden';
    for (let index = 0; index < 3; index++) {
        document.getElementsByClassName('newImg')[index].style.opacity = '1'
    }
    document.getElementsByClassName('navbar1')[0].style.opacity = '1'
    document.getElementsByClassName('shopContainer')[0].style.opacity = '1'
}


// For light/dark mode on click 
const changeMode = () => {
    const myBody = document.body
    const myNavi = document.getElementsByClassName('navbar1')[0];
    const footer = document.getElementsByClassName('footer')[0];
    const changeView = document.getElementsByClassName('changeView')[0];
    
    myBody.classList.toggle('myDark')
    myNavi.classList.toggle('myDark')
    footer.classList.toggle('myDark')
    changeView.classList.toggle('newIconChange')
    
    for(let index = 0; index<8; index++){
        const navAnchor = document.getElementsByClassName('navAnchor')[index];
        navAnchor.classList.toggle('newNavAnchor');
    }
    
    for(let index = 0; index<4;index++){
        const boxClass = document.getElementsByClassName('box')[index];
        boxClass.classList.toggle('invertBox');
    }

    for(let i = 0; i<2; i++){
        const heading = document.getElementsByClassName('heading')[i];
        heading.classList.toggle('invertHeading');
    }

    for(let j = 0; j<6; j++){
        const footContent = document.getElementsByClassName('footContent')[j];
        footContent.classList.toggle('footInvert');
    }

    for(let i = 0; i<1; i++){
        const socialBox = document.getElementsByClassName('socialBox')[i];
        socialBox.classList.toggle('socialInvert');
    }

    for(let j = 0; j<53; j++){
        const footA = document.getElementsByClassName('footA')[j];
        footA.classList.toggle('footInvert');
    }
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