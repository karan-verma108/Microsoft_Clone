import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Home from './Home/Home'
import Device from './Devices/DeviceLogic';
import Microsoft365 from './Extras/Microsoft365';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}> 
                        <Route index element={<Home/>}/> 
                        <Route path='/devices' element={<Device/>}/> 
                        <Route path='/microsoft365' element={<Microsoft365/>}/>
                        <Route path='/devices/:category_id' element={<Device/>}/> 
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing