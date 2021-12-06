import React from 'react'
import { Route, Switch } from 'react-router-dom'

const RootRoute = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    )
}

export default RootRoute