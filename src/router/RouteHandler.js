import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import ProductList from "../components/ProductList"
//nimport { Navigate } from "react-router"
//import Navbar from "../components/navbar"
import Product from "../components/Product"

function RouteHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            <Switch>
                <Route exact path='/Product' component={Product} />
                <Switch>
                <Route exact path='/ProductList' component={ProductList} />
            </Switch>
            </Switch>
        </Router>
    )
}

export default RouteHandler
