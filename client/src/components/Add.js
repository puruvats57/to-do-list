import React from "react";

function Add(props){
    


    

    return(
        <>
            <h2>Add tasks</h2>
            
            <form action="http://10.102.48.146:9999/add" method="POST">
                <div className="input-group">
                <label for="name">to heading:</label>
                <input type="text" name="name" />
                </div>
                <div className="input-group">
                <label for="desc">to-do description:</label>
                <input type="text" name="desc" />
                </div>
                <button>add</button>
                

            </form>
            
            
        
        </>
    

    )
}

export default Add;