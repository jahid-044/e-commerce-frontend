import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import AddProduct from '../components/products/AddProduct'
import ProductList from "../components/products/ProductList"
import customer from "../components/products/ProductList"
//import Product from "../components/Product"

function RouteHandler() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/addProduct' component={AddProduct} />
                <Route exact path='/ProductList' component={ProductList} />
                <Route exact path='/customer' component={customer} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouteHandler