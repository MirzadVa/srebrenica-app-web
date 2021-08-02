import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import routes from '../routes'

const MainLayout = () => {

    const getRoutes = (routes) => {
        console.log(routes)
        return routes.map((prop, key) => {
            return (
                <Route
                    path={prop.path}
                    key={key}
                    render={(routeProps) => (
                        <prop.component {...routeProps} />
                    )}
                />
            )
        })
    }
    return (
        <div>
            <Router>
                <Switch>{getRoutes(routes)}</Switch>
            </Router>
        </div>
    )
}

export default MainLayout