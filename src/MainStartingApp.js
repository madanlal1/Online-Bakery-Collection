
import {Products} from './Products'
import {MainHomePageNavBar} from './MainHomePageNavBar'
import {Cart} from './Cart'

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function MainStartingApp(){

        return(
            <Router>
                <MainHomePageNavBar />
                <Switch>

                <Route exact path="/">
                        
                </Route>


                    <Route exact path="/Products">
                        <Products />
                    </Route>
                    
                    <Route exact path="/Cart">
                        <Cart />
                    </Route>
                    
                </Switch>
            </Router>
        )
    
}