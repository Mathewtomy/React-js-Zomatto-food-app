

import Layout from "./Layout";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'
import Profile from './Profile';

class Path extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();

    }
    render(){
        return(
         
            <Router>
<div>

</div>
<Switch>
 
    <Route path="/details/:id">
<Layout>

</Layout>

    </Route>
    <Route path="/profile">
<Profile>

</Profile>

    </Route>
</Switch>
</Router>
        );
    }
}
export default Path