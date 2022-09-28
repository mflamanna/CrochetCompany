import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import Shop from "../Pages/Shop";
import Resources from "../Pages/Resources";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Favorites from "../Pages/Favorites";
import SearchResults from "../Pages/SearchResults";
import Detail from "../Pages/Detail";


export default function Router (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/recursos' element={<Resources/>}/>
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/favoritos' element={<Favorites/>}/>
            <Route path='/resultadosBusqueda' element={<SearchResults/>}/>
            <Route path='/detalle/:id' element={<Detail/>}/>
        </Routes>
        </BrowserRouter>
    )
}

