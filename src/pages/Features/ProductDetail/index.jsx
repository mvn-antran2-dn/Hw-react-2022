import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <li className="product-detail container" key={product.id}>
        <div className="product-top">
          <h2 className="product-catalog">{product.category}</h2>
          <img className="product-img" src={product.image} alt="" />
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-desc">{product.description}</p>
        </div>
      </li>
    </div>
  );
}
