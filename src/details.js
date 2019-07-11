import React from 'react';
import './App.css';
import Table from"./ExpansesTable"

function Details(){
   return(
     <div>
     <div className="charts">
             <div className="budget" style={{border: '1px solid black'}}>
               <header className="Chart_header" style={{borderBottom: '1px solid black'}}>
                  Budget Overview
                </header>
                <div className="rounde_row">
                      <div className="rounded">
                        <p>80% Spent</p>
                      </div>
                  <div className='total_budget'>
                    <h3>Total Budget</h3>
                    <h4>RS:20000000</h4>
                    <h3>Total Expenses</h3>
                    <h4>RS:1200000</h4> 
                   </div>
                </div>

                </div>
                <div className="budget" style={{border: '1px solid black'}}>
                <header className="Chart_header" style={{borderBottom: '1px solid black'}}>
                  Category wise split
                </header>
                <div className="rounde_row">
                      <div className="rounded">
                        <p>RS 120000</p>
                      </div>
                  <div className='total_budget'>
                    <h3>Total Budget</h3>
                    <h4>RS:20000000</h4>
                    <h3>Total Expenses</h3>
                    <h4>RS:1200000</h4> 
                   </div>
                </div>
                </div>
               
          </div> 
          <Table/>
          </div>

   )
}
export default Details