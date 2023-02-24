import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import Fooddata from './FoodData';
import Path from './Path';

import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom'




const allCategories = [ ...new Set(Fooddata.map((item) => item.category))];
function Main() {

    return (
      <div className="App">

    
     <Router>
      <Switch>

       
     <Route path="/" >
      <Search detailz={allCategories}></Search>
        </Route>

   

      
      </Switch>
    </Router>
    <Path></Path>
      </div>
    );
  }
  
  export default Main;
  