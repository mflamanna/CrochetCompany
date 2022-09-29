import React, { useEffect, useState } from "react";
import IconSearch from '../../../../Assets/Img/search.png'
import './Styles-SearchBar.css'
import axios from "axios";
import ContainerSearch from "./ContainerSearch";

export default function SearchBar() {

    const [crochetApi, setCrochetApi] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect (()=>{
        axios.get("https://sheetsu.com/apis/v1.0su/48b7af5e1403")
        .then ((res)=> {
            setCrochetApi(res.data)
        })

    },[])

    const [searching, setSearching] = useState(false)

    const isSearching = (e)=>{
        if(e.target.value == ''){
            setSearching (false)
        } else{
        setSearchTerm(e.target.value)
        setSearching (true)
        }
        console.log(searching)
    }


    return (
        <>
        <div className='search-bar'>
            <input id="searchBar" type="text" className="input-search" onChange={isSearching}/>
            <img className='icon-search' src={IconSearch} alt="Search" />
        </div>
        <div>
           <ContainerSearch searchState = {searching} apiCrochet = {crochetApi} searchTerm = {searchTerm}/>
         </div>
        
        </>
    );
}