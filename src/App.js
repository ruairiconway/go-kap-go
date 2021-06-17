import GlobalStyle from './globalStyle'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { HOME, RUNNING, REASON } from './constants/routes'
import HomePage from './pages/HomePage'
import RunningPage from './pages/RunningPage'
import ReasonPage from './pages/ReasonPage'

export default function App() {
  return (
    <>
        <GlobalStyle />
        <Router>
            <Switch>
                <Route path={HOME} exact>
                    <HomePage />
                </Route>
                <Route path={RUNNING}>
                    <RunningPage />
                </Route>
                <Route path={REASON}>
                    <ReasonPage />
                </Route>
            </Switch>
        </Router>
    </>
  );
}
