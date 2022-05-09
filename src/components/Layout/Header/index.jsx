import React from 'react';
import {NavLink} from 'react-router-dom';
import {ImEarth} from 'react-icons/im';
import {AiOutlineUser} from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { useSelector } from "react-redux";

export default function Header() {
  const favs = useSelector((state) => state.favs.value);
  return (
   <header className='page-header flex justify-content-between'>
     <div className="header-logo">
      <ImEarth className="logo"/>
     </div>
        <ul className="menu-list">
          <li>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/products">Products</NavLink>
          </li>
        </ul>
       <ul className="header-action">
         <li>
            <NavLink activeClassName="active" to="/account">
              <AiOutlineUser/>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/account">
              <span className= 'counter'>
                <FaRegHeart/>
                {!!favs.length && <span>{favs.length}</span>}
              </span>
            </NavLink>
          </li>
       </ul>
   </header>
  )
}
