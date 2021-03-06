import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import OwnerSignup from "../components/Signup/OwnerSignup"
import Signin from "../components/Signin/Signin"

function RouteHandler() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/ownerSignup' component={OwnerSignup} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouteHandler