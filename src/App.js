import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Theme from './components/Theme/Theme';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
    return (
        <Router>
            <Theme>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </Theme>
        </Router>
    );
}

export default App;
