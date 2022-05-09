import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "../../../stores/favSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [pros, setPros] = useState([
    {
      id: 1,
      img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg",
      title: "Product 1",
      price: 2000,
      fav: false,
    },
    {
      id: 2,
      img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg",
      title: "Product 2",
      price: 3000,
      fav: false,
    },
    {
      id: 3,
      img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg",
      title: "Product 3",
      price: 4000,
      fav: false,
    },
    {
      id: 4,
      img: "https://flone.reactdemo.hasthemes.com/assets/img/product/books/6.jpg",
      title: "Product 4",
      price: 5000,
      fav: false,
    },
  ]);
  const handleClickFav = (prods, id) => {
    prods.preventDefault();
    const newPros = pros.map((prods) => {
      if (prods.id === id) {
        prods.fav = !prods.fav;
      }
      return prods;
    });
    setPros(newPros);
    dispatch(toggle(id));
  };
  return (
    <>
      <div className="product-show container">
        <ul className="product-show-list wrap-content">
          {pros.map((item) => {
            return (
              <li className="product-show-item col-3" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="pros-info">
                  <h3 className="pros-title">{item.title}</h3>
                  <p className="pros-price">{item.price}</p>
                  <p
                    className={`${item.fav ? "active" : ""}`}
                    onClick={(prods) => handleClickFav(prods, item.id)}
                  >
                    <FaRegHeart />
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
