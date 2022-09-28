import React, {useState, useEffect} from "react";
import './ProductList-Styles.css'
import CardProduct from "./CardProduct/CardProduct";
import Loading from "../Loading/LoadingPage";
import { crochetServices } from "../../Services/crochetServices";


export default function ProductList (){

    const [crochetApi, setCrochetApi] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect (()=>{
        crochetServices.getAllProducts().then ((res)=> {
            setCrochetApi(res)
            setLoading(true)
        })

    },[])

  
    return(
        <div className="container-products">
                { loading? 
                    crochetApi.map((item,index)=>(
                        <CardProduct  key={index} modelo={item.modelo} precio={item.precio} imagen={item.imagen} element={item} id={item.id}/>
                    ))
                    : <Loading/>}
        </div>
    );
}