import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";



import "../data.css";

function Home(props)
{
    const navigate = useNavigate();
   
    let [got,getall]=useState(0);
    let [update,updateall]=useState(0);


    
       


        
        

        useEffect(() =>{
        console.log("hye from get fetch");
        fetch('http://127.0.0.1:9999/fetch',

        {
            method:"GET",
            /*body: JSON.stringify({
                search:search
            
            }),*/
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        }).then(response => response.json())
            .then(json =>{
                getall(json.data);
               
               console.log("hhhh",json);
            });
        }, [])
    
    
        function updat(e,name,desc,id)
        {
            e.preventDefault();

            navigate('/update', { state: {name:name,desc:desc,id:id } });

        }
      function comment(e,name,desc,id)
        {
            e.preventDefault();

            navigate('/comment', { state: {name:name,desc:desc,id:id } });

        }
    async function del(e, id)
    {
        e.preventDefault();

        const result = await fetch('http://127.0.0.1:9999/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                
                    id
                    
                })
            }).then((res) => res.json())

            if (result.status === 'ok') {
                
                navigate('/');
            } else {
                //alert(result.error)
            }


    }

    async function task(e, id)
    {
        console.log("hye");
        e.preventDefault();

        const result = await fetch('http://10.102.48.146:9999/complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                
                    id
                    
                })
            }).then((res) => res.json())

            if (result.status === 'ok') {
                
                navigate('/');
            } else {
                //alert(result.error)
            }


    }

    
    
        
    


        
        
      


       
        
    return(

        <>
        {Object.keys(got).map((key) =>(

            <>
           
            
                <div className="card" >
                
                    <div className="card-body">
                    <h1>heading</h1>
                    <h5>{got[key].name}</h5>
                        <h2>description</h2>
                        <p>{got[key].desc}</p>
                        <h2>comment</h2>
                        <p>{got[key].comment}</p>
                        
                        <h2>task status</h2>
                        <p>{got[key].complete != 0 ? <p>completed</p> : <p> mark as complete:<input name="checkbox" onClick={(e) => task(e,got[key]._id)} type="checkbox" id="checkbox" /></p> }</p>
                    
                    <button onClick={(e) => updat(e,got[key].name,got[key].desc,got[key]._id)}>update</button>
                    <button onClick={(e) => comment(e, got[key].name, got[key].desc, got[key]._id)}>comment</button>
                    <button onClick={(e) => del(e,got[key]._id)}>delete</button>
                    </div>
                </div>
               

            </>


        ))}
        </>

    
        

    )
}
export default Home;