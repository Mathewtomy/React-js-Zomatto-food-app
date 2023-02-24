//npm install --save 'react-router'      
//npm i react-router-dom   
//npm install --save react-router 
//npm i react-router-dom@5.2.0  

 import About from "./About";
 import Contact from "./Contact";
 import Home from "./Home";
 import Item from "./Item";
 
 import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
 import React, { Component } from 'react'

 
 class Routerz extends Component{
     // eslint-disable-next-line no-useless-constructor
     constructor(){
         super();
 
     }
     render(){
         return(
             <Router>
 <div>
 <ul>
     <li>
         <Link to="/">Home</Link>
     </li>
     <li>
         <Link to="/about">About</Link>
     </li>
     <li>
         <Link to="/contact">Contact</Link>
     </li>
     <li>
         <Link to="/item/1">First item 1</Link>
     </li>
     
     <li>
         <Link to="/item/2">First item 2</Link>
     </li>
     
     <li>
         <Link to="/item/3">First item 3</Link>
     </li>
     <li>
         <Link to="/product/3">First item 4</Link>
     </li>
 
 </ul>
 </div>
 <Switch>
     <Route exact path="/">
         <Home/>
     </Route>
     <Route path="/about">
         <About/>
     </Route>
     <Route path="/contact">
         <Contact/>
     </Route>
     <Route path="/item/:id">
 <Item>
 
 </Item>
     </Route>
 </Switch>
 </Router>
         );
     }
 }
 export default Routerz