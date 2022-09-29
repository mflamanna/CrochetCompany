import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import Shop from "../Pages/Shop";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Favorites from "../Pages/Favorites";
import Detail from "../Pages/Detail";


export default function Router (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/favoritos' element={<Favorites/>}/>
            <Route path='/detalle/:id' element={<Detail/>}/>
        </Routes>
        </BrowserRouter>
    )
}

