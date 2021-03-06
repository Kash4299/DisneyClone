import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';

export default function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/login"> 
                        <Login />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail/>
                    </Route>
                    <Route path ="">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
