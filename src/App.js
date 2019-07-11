import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Setting from './expensesDemo'
import Details from './details'

function ExpensesDemo() {
  return (
    <div className="App">
      <div className="header">
        <h3 style={{textDecorationLine:"underline"}}>Expenseeve</h3>
        </div>
        <div className="row">
          <div className="menu">
         
            <a href="/" className="menu_Content" style={{borderBottom: '1px solid black',width:"100%",}}>Home</a>
            <a href="/users" target="details" className="menu_Content"style={{borderBottom: '1px solid black',width:"100%"}}>Settings</a>
            <a href="/" className="menu_Content"style={{borderBottom: '1px solid black',width:"100%"}}>Profile</a>
           </div>

           <div className="details">

            <Router>
              <div>
                  <Route exact path="/" component={Details} />
                  <Route path="/users" component={Setting} />          
             </div>
           </Router> 
           
         </div>
       </div>

    </div>
  );
}

export default ExpensesDemo;
