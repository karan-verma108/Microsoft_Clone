import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

// const baseUrl = process.env.REACT_APP_API_URL

const Header = () => {

    // const onloadPage = () => {
    //     document.getElementById('coupon').style.visibility = 'visible';
    //     for (let index = 0; index < 3; index++) {
    //         document.getElementsByClassName('newImg')[index].style.opacity = '0.7'
    //     }
    //     document.getElementsByClassName('navbar1')[0].style.opacity = '0.7'
    //     document.getElementsByClassName('shopContainer')[0].style.opacity = '0.7'
    // }


    // // for making the coupon appear 2 seconds late
    // setTimeout(() => {
    //     onloadPage()

    // }, 2000);

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

        for (let index = 0; index < 8; index++) {
            const navAnchor = document.getElementsByClassName('navAnchor')[index];
            navAnchor.classList.toggle('newNavAnchor');
        }

        for (let index = 0; index < 4; index++) {
            const boxClass = document.getElementsByClassName('box')[index];
            boxClass.classList.toggle('invertBox');
        }

        for (let i = 0; i < 2; i++) {
            const heading = document.getElementsByClassName('heading')[i];
            heading.classList.toggle('invertHeading');
        }

        for (let j = 0; j < 6; j++) {
            const footContent = document.getElementsByClassName('footContent')[j];
            footContent.classList.toggle('footInvert');
        }

        for (let i = 0; i < 1; i++) {
            const socialBox = document.getElementsByClassName('socialBox')[i];
            socialBox.classList.toggle('socialInvert');
        }

        // for(let j = 0; j<51; j++){
        //     const footA = document.getElementsByClassName('footContent')[j];
        //     footA.classList.toggle('footInvert');
        // }
    }


    // useState for categories 
    const [category1] = useState('PCs and Devices')
    const [category2] = useState('Mouse')
    const [category3] = useState('Keyboard')
    const [category4] = useState('Webcam')
    const [category5] = useState('Headsets and Audio')
    const [category6] = useState('Xbox')

    //1) <-------- useState for pcName --------->
    const [pcName, setPcName] = useState([])

    // fetching data using axios 
    useEffect(() => {
        axios.get('http://localhost:8000/pcdevice')
            .then(res => { setPcName(res.data) })
            .catch(err => console.log(err))
    }, [])

    // iterating over pcdevice collection for getting the pcName 
    const renderPcName = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <Link to={`/devices/${item.category_id}`} key={item.id} >
                        <li key={item.id} value={item.category_id} className='liBox'>
                            {item.name}
                        </li>
                    </Link>
                )
            })
        }
    }

    // getting the selected value by user 

    const handlePcName = (event) => {
        // console.log(event.target.value);
        // const category_id = event.target.value;

    }

    // <-------- useState ends here for pcName --------->

    //2) <-------- useState for mouseName --------->
    const [mouseName, setMouseName] = useState([])

    // fetching data using axios 
    useEffect(() => {
        axios.get('http://localhost:8000/mouse')
            .then(res => { setMouseName(res.data) })
            .catch(err => console.log(err))
    }, [])

    // iterating over mouse collection for getting the mouseName 
    const renderMouseName = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <Link to={`/devices/${item.category_id}`} key={item.id} >
                        <li key={item.id} value={item.category_id} className='liBox'>
                            {item.name}
                        </li>
                    </Link>
                )
            })
        }
    }

    // getting the selected value by user 

    const handleMouseName = (event) => {
        console.log(event.target.value);
    }
    
    // <-------- useState ends here for mouseName --------->

    //3) <-------- useState for keyboardName --------->
    const [keyboardName, setKeyboardName] = useState([])

    // fetching data using axios 
    useEffect(() => {
        axios.get('http://localhost:8000/keyboard')
            .then(res => { setKeyboardName(res.data) })
            .catch(err => console.log(err))
    }, [])

    // iterating over keyboard collection for getting the keyboardName 
    const renderKeyboardName = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <Link to={`/devices/${item.category_id}`} key={item.id} >
                        <li key={item.id} value={item.category_id} className='liBox'>
                            {item.name}
                        </li>
                    </Link>
                )
            })
        }
    }

    // getting the selected value by user 

    const handleKeyboardName = (event) => {
        console.log(event.target.value);
    }
    
    // <-------- useState ends here for keyboardName --------->

    //4) <-------- useState for webcamName --------->
    const [webcamName, setWebcamName] = useState([])

    // fetching data using axios 
    useEffect(() => {
        axios.get('http://localhost:8000/webcam')
            .then(res => { setWebcamName(res.data) })
            .catch(err => console.log(err))
    }, [])

    // iterating over webcam collection for getting the webcamName 
    const renderWebcamName = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <Link to={`/devices/${item.category_id}`} key={item.id} >
                        <li key={item.id} value={item.category_id} className='liBox'>
                            {item.name}
                        </li>
                    </Link>
                )
            })
        }
    }

    // getting the selected value by user 

    const handleWebcamName = (event) => {
        console.log(event.target.value);
    }
    
    // <-------- useState ends here for webcamName --------->

    //5) <-------- useState for audioDeviceName --------->
    const [audioDeviceName, setAudioDeviceName] = useState([])

    // fetching data using axios 
    useEffect(() => {
        axios.get('http://localhost:8000/audiodevice')
            .then(res => { setAudioDeviceName(res.data) })
            .catch(err => console.log(err))
    }, [])

    // iterating over audiodevice collection for getting the audioDeviceName 
    const renderAudioDeviceName = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <Link to={`/devices/${item.category_id}`} key={item.id} >
                        <li key={item.id} value={item.category_id} className='liBox'>
                            {item.name}
                        </li>
                    </Link>
                )
            })
        }
    }

    // getting the selected value by user 

    const handleAudioDeviceName = (event) => {
        console.log(event.target.value);
    }
    
    // <-------- useState ends here for xboxName --------->

    //6) <-------- useState for audioDeviceName --------->
    const [xboxName, setXboxName] = useState([])

    // fetching data using axios 
    useEffect(() => {
        axios.get('http://localhost:8000/xbox')
            .then(res => { setXboxName(res.data) })
            .catch(err => console.log(err))
    }, [])

    // iterating over xbox collection for getting the xboxName 
    const renderXboxName = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <Link to={`/devices/${item.category_id}`} key={item.id} >
                        <li key={item.id} value={item.category_id} className='liBox'>
                            {item.name}
                        </li>
                    </Link>
                )
            })
        }
    }

    // getting the selected value by user 

    const handleXboxName = (event) => {
        console.log(event.target.value);
    }
    
    // <-------- useState ends here for xboxName --------->

    return (
        <nav id="myNavi" className="navbar1 opacClass">

            <div id="newAlert" className="alert alert-warning alert-dismissible" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span
                    aria-hidden="true">&times;</span></button>
                <span id="temp">Loading...</span>
            </div>

            <div className="leftNav">
                <div id="lg-width" className="navItemsLeft radius box-shadow"><Link to={`/microsoft365`} className="navAnchor" href="microsoft365.html">Microsoft 365</Link>

                </div>
                <div id="team-wd" className="navItemsLeft radius box-shadow"><Link to={'/teams'} className="navAnchor" href="/">Teams</Link></div>
                <div className="navItemsLeft radius box-shadow"><Link to={'/windows'} className="navAnchor" href="/">Windows</Link></div>
                <div id="surfaceId" className="navItemsLeft radius box-shadow"><Link to={'/surface'} className="navAnchor" href="/">Surface</Link></div>

            </div>

            <div className="logoDiv">
                <Link to={'/'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5969/5969206.png"
                        alt="Microsoft icon" title="Microsoft icon" /> </Link>
            </div>

            <div className="rightNav">
                <button onClick={changeMode} className="changeView">
                    <img id="noneFilter" src="https://cdn-icons-png.flaticon.com/512/5115/5115625.png" alt="" />
                </button>
                <div className="dropdown">
                    <button id="allMicro" className="navAnchor btn dropdown-toggle" type="button" data-toggle="dropdown">All Microsoft
                        <span className="caret"></span></button>
                    <ul id="dropdown_id" className="dropdown-menu">
                        <div onClick={handlePcName} className="liContainer">
                            <li className="liBox extra">{category1}</li>
                            {renderPcName(pcName)}
                        </div>
                        <div onClick={handleMouseName} className="liContainer">
                            <li className="liBox extra">{category2}</li>
                            {renderMouseName(mouseName)}
                        </div>
                        <div onClick={handleKeyboardName} className="liContainer">
                            <li className="liBox extra">{category3}</li>
                            {renderKeyboardName(keyboardName)}
                        </div>
                        <div onClick={handleWebcamName} className="liContainer">
                            <li className="liBox extra">{category4}</li>
                            {renderWebcamName(webcamName)}
                        </div>
                        <div onClick={handleAudioDeviceName} className="liContainer">
                            <li className="liBox extra">{category5}</li>
                            {renderAudioDeviceName(audioDeviceName)}
                        </div>
                        <div onClick={handleXboxName} className="liContainer">
                            <li className="liBox extra">{category6}</li>
                            {renderXboxName(xboxName)}
                        </div>

                    </ul>
                </div>


                <div id="supportId" className="navItemsRight radius box-shadow"><Link to={'/support'} className="navAnchor" href="/">Support <i className="glyphicon glyphicon-phone-alt"></i></Link></div>

                <div id="cart-wd" className="navItemsRight radius box-shadow"><a className="navAnchor" href="/">Cart <i className="glyphicon glyphicon-shopping-cart"></i></a></div>
                <div id="off" className="navItemsRight radius box-shadow"><a className="navAnchor" href="/">Sign in <i className="glyphicon glyphicon-log-in"></i></a></div>
            </div>
        </nav>
    )
}

export default Header