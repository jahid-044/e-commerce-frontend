import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import AddProduct from '../components/AddProduct'

function RouteHandler() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/addProduct' component={AddProduct} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouteHandler
