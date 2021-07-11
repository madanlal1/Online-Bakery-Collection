import {MainHomePageNavBar} from './MainHomePageNavBar'
import {Cart} from './Cart'
import AskToSinIn from './AskToSinIn'
import SinInModule from './SinInModule'
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home';

export default function MainStartingApp(){

        return(
            <Router>
                <MainHomePageNavBar />

                <Switch>

                <Route exact path="/">
                        <Home/>
                </Route>
                
                    {/* <Route exact path="/SinInArea">
                        
                    </Route>
                    
                    <Route exact path="/SinUpArea">
                        
                    </Route> */}

                    <Route exact path="/Cart">
                        <Cart />
                    </Route>
                    <Route exact path="/AskToSinIn">
                        <AskToSinIn />
                    </Route>
                    
                    
                </Switch>
            </Router>
        )
    
}