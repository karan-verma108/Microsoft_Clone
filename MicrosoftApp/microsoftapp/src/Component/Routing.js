import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Home from './Home/Home'
import Device from './Devices/DeviceLogic';
import Microsoft365 from './Extras/Microsoft365';
import Surface from './Extras/Surface'
import Teams from './Extras/Teams'
import Windows from './Extras/Windows'
import CloudPC from './Extras/CloudPC'
import Xbox from './Extras/Xbox'
import Support from './Extras/Support'
import DeviceDetails from './DeviceDetails/DeviceDetailsLogic'
import PlaceOrder from './Order/PlaceOrder'
import ViewOrder from './Order/ViewOrder'
import LoginComponent from './Login/LoginComponent'
import RegisterComponent from './Login/RegisterComponent'

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}> 
                        <Route index element={<Home/>}/> 
                        <Route path='/microsoft365' element={<Microsoft365/>}/>
                        <Route path='/surface' element={<Surface/>}/>
                        <Route path='/teams' element={<Teams/>}/>
                        <Route path='/windows' element={<Windows/>}/>
                        <Route path='/cloudpc' element={<CloudPC/>}/>
                        <Route path='/xbox' element={<Xbox/>}/>
                        <Route path='/support' element={<Support/>}/>
                        <Route path='/devices/:category_id' element={<Device/>}/> 
                        <Route path='/devicedetails' element={<DeviceDetails/>}/>
                        <Route path='/placeOrder/:deviceName' element={<PlaceOrder/>}/>
                        <Route path='/orders' element={<ViewOrder/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>
                        <Route path='/register' element={<RegisterComponent/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing