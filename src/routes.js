import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
} from "react-router-dom";
import './index.css';
import AddStore from './Components/AddStore';
import Dashboard from './Components/Dashboard';

class Routes extends Component {
    render() {
        return (
            <div>
              
                <Router>
                
                    <Switch>
                        <Route exact path="/">
                            <AddStore />
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard/>
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;