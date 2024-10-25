import React, { Component } from 'react'
import Home from './Home';
import Employee from './Employee';
import Contect from './Contect';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <BrowserRouter> 
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/employee" element={<Employee id = "1" />} />
          <Route path="/contect" element={<Contect />} />

        </Routes>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li>  <Link to="/employee">About</Link> </li>
          <li>  <Link to="/contect">Contact</Link></li>

        </ul>
              
            
             
           
             
         

    </BrowserRouter>
        
      </div>
    )
  }
}
