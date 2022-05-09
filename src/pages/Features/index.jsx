import Home from "./Home";
import Products from "./ProductList";
import ProductDetail from "./ProductDetail";
import { Switch, Route } from "react-router-dom";
import React from 'react'

export default function Feature() {
  return (
    <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product/:id" children={<ProductDetail />}>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  )
}

