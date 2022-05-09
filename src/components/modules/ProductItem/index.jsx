import React from 'react'
import { useHistory } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "../../../stores/favSlice";
import { useSelector } from "react-redux";

export default function ProductDetail({product}) {
  let history = useHistory();
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs.value);
  const handleClickFav = (prods, id) => {
    prods.preventDefault();
    dispatch(toggle(id));
  };

  return (
   <>
   <div className="product-item col-3">
      <h2 className="product-catalog">{product.category}</h2>
      <a href="./" className='product-top'>
        <p className={`${favs.includes(product.id) ? "active" : ""} product-heart`}
        onClick={(prods) => handleClickFav(prods, product.id)}       
        >
          <FaRegHeart />
        </p>
        <img className="product-img" src={product.image} alt="" />
      </a>
      <h3 className="product-title">
        {product.title}
      </h3>
      <div className="product-bottom">
      <span>$ {product.price}</span>
      <button onClick={()=> history.push(`/product/${product.id}`)} className="btn btn-show">Show more</button>
      </div>
   </div>
   </>
  )
}
