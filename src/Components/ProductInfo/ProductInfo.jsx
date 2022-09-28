import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { crochetServices } from "../../Services/crochetServices";
import { useState } from "react";
import CardProductInfo from "./CardProductInfo";
import './CardProductInfo.styles.css'
import Loading from "../Loading/LoadingPage";



export const ProductInfo = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(
    () => {
      getProductById(id);
    }, // eslint-disable-next-line
    []
  );

  const getProductById = (id) => {
    crochetServices.getProductById(id).then((res) => {
      setProduct(res);
      setLoading(true)
      console.log(res);
    });
  };

  return (
    <div className="detail-page">
        { loading?
                    product.map((item,index)=>(
                        <CardProductInfo  key={index} modelo={item.modelo} precio={item.precio} imagen={item.imagen} element={item} id={item.id} descripcion={item.descripcion}/>
                    ))
                    : <Loading/>
                    }
    </div>
  );
};
