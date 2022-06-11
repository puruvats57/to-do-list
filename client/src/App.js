import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Add from "./components/Add";
import Home from "./components/Home";

import Update from "./components/Update";
import Comment from "./components/Comment";



function App() {
  
  
  
  
  
  const getdata = (data) =>{

    console.log("i am data",data);
  
    
    
    
  
  }

  //let [get,setget]=useState(g);
  
  return (
    <>
      
      <Add/>
   
    
    <Routes>
    
        <Route path='/' element={<Home />} />
        <Route path='/update' element={<Update />} />
        <Route path='/comment' element={<Comment />} />
        
        

    </Routes>
      
    

     
    </>
      
      
      
    
  );
}

export default App;
