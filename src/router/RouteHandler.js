import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import OwnerSignup from "../components/Signin-Signup/OwnerSignup"
import Signin from "../components/Signin-Signup/Signin"

function RouteHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Signin} />
                <Route exact path='/ownerSignup' component={OwnerSignup} />
            </Switch>
        </Router>
    )
}

export default RouteHandler
