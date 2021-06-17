import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RunningPage from '../pages/RunningPage'
import ReasonsPage from '../pages/ReasonsPage'

export default function Navigation() {
    return (
        <Router>
            <nav>
                <div>
                    <Link to="/">HOME LOGO</Link>
                </div>
                <ul>
                    <li>
                        <Link to="/running">The Running</Link>
                    </li>
                    <li>
                        <Link to="/reason">The Reason</Link>
                    </li>
                    <li>
                        <a href="https://www.gofundme.com" target="_blank" rel="noreferrer">Donate</a>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/running">
                    <RunningPage />
                </Route>
                <Route path="/reason">
                    <ReasonsPage />
                </Route>
            </Switch>
        </Router>
    )
}