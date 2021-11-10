import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/home'

function RouteHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default RouteHandler
