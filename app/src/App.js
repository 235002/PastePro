import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Task from './Task';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path = '/' exact = {true} component = {Home}/>
                    <Route path = '/task/:hash' component={Task}/>
                </Switch>
            </Router>
        );
    }
}

export default App;