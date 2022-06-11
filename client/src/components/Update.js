import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function Update() {
    const navigate = useNavigate();
    
    const {state} = useLocation();
    const { name,desc,id } = state; // Read values passed on state


    //console.log("i am there", name);
    
    useEffect(() => {
        
    
                
            
        const form = document.getElementById('update')
        form.addEventListener('submit', updat)

        async function updat(event) {
            event.preventDefault()
            const name = document.getElementById('name').value
            const desc = document.getElementById('desc').value

            const result = await fetch('http://127.0.0.1:9999/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    desc,
                    id
                })
            }).then((res) => res.json())

            if (result.status === 'ok') {
                
                navigate('/');
            } else {
                //alert(result.error)
            }

            
                
            
        }
    }, [])

    return (
        <>
            <h1>Update</h1>
            <form id="update">
                
               
                <h2>to-do heading</h2>
                <textarea id="name" name="desc" rows="4" cols="50">{ name}</textarea><br></br>
            
                <label for="name">to-do description:</label><br></br>
                <textarea id="desc" name="desc" rows="4" cols="50">{ desc}</textarea>
                
                
                <input type="submit" value="Submit Form" />
            </form>
        
            
      </>
  )
}

export default Update