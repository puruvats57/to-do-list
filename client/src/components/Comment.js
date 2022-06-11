import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function Comment() {
    const navigate = useNavigate();
    
    const {state} = useLocation();
    const { name, desc, id } = state;

    useEffect(() => {
        
    
                
            
        const form = document.getElementById('update')
        form.addEventListener('submit', updat)

        async function updat(event) {
            event.preventDefault()
            const name = document.getElementById('name').value
            const desc = document.getElementById('desc').value
            const com= document.getElementById('com').value

            const result = await fetch('http://127.0.0.1:9999/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    desc,
                    id,
                    com
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
            <h1>comment</h1>
            <form id="update">
                
                <label for="name">to-do heading:</label>
                <p>{name}</p><br></br>
            
                <label for="name">to-do description:</label><br></br>
                <p>{desc}</p><br></br>
              
                <label for="name">to-do comment:</label><br></br>
                <textarea id="com" name="desc" rows="4" cols="50"></textarea>
                
                
                <input type="submit" value="Submit Form" />
            </form>
        
            
      </>
  )
}

export default Comment