import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Component/Home/Home';
import Listing from './Component/Listing/Listing';
import Details from './Component/details/RestDetails';
import Header from './Header';
import Footer from './Footer';
import PlaceOrder from './Component/booking/PlaceOrder';
import ViewOrder from './Component/booking/ViewOrder';

const Routing = ()=> {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route  path='/Listing/:id' component={Listing}/>
            <Route  path='/details' component={Details}/>
            <Route  path='/PlaceOrder/:restName' component={PlaceOrder}/>
            <Route  path='/ViewOrder' component={ViewOrder}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;