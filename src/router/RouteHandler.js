import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import AddProduct from '../components/AddProduct'
import ProductList from "../components/ProductList"
import Product from "../components/Product"

function RouteHandler() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/addProduct' component={AddProduct} />
                <Route exact path='/ProductList' component={ProductList} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouteHandler