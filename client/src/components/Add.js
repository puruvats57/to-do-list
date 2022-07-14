import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function Add(props) {
    const navigate = useNavigate();

    useEffect(() => {
        
    
                
            
        const form = document.getElementById('add')
        form.addEventListener('submit', updat)

        async function updat(event) {
            event.preventDefault()
            const name = document.getElementById('name').value
            const desc = document.getElementById('desc').value

            const result = await fetch('http://127.0.0.1:5000/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    desc
                    
                })
            }).then((res) => res.json())
           

            

            
                
            
        }
    }, [])

            



    
    
    
    

    


    

    return(
        <>
            <h2>Add your tasks here too</h2>
            
            <form id="add">
                
               
                <h2>to-do heading</h2>
                <input type="text" id="name"></input>
            
                <label for="name">to-do description:</label><br></br>
                <input type="text" id="desc"></input>
                
                
                <input type="submit" value="Submit Form" />
            </form>
            
            
        
        </>
    

    )
}

export default Add;