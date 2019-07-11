import React,{useState} from 'react';
import './App.css';


function ExpensesDemo() {
    const [name,setName] = useState("200000");
    const [categori,setCategori] =useState("categori name hear")

    function onSubmitBudget(e){
        setName(e.target.value);   
      } 

      function onSubmitCategori(e){
        setCategori(e.target.value);   
      } 
  return (
    // <div className="App">
    <div className="form1">
       <div className="form" style={{marginTop:100}}>
       <h5>Total Budget</h5>
       <input type = "text" value ={name} style={{width:600,height:30}}
               onChange = {onSubmitBudget} />
        <button style={{height:35,width:85,marginLeft:20,borderRadius:5,color:'green'}}>Update</button>
       </div>

       <div className="form" >
           <h5>Categories</h5>
       <input type = "text" value ={categori} style={{marginLeft:12,width:600,height:30}}
               onChange = {onSubmitCategori} />
        <button style={{height:35,width:85,marginLeft:20,borderRadius:5,color:'green'}}>Add</button>
      </div>
     </div>
  );
}

export default ExpensesDemo;
