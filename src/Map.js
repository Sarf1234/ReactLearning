import React from "react";


function Map(){
    const arr = ['green', 'yellow', 'pink', 'black'];
    const newstyle = {
        "backgroundColor" : "black",
         "padding" : "10px",
         "color" : "white",
         "width" : "60%",
         "margin" : "10px auto"
    }

    return(
        <div style={newstyle}>
            <h1>Map in jsx</h1>
            <h3>about key in jsx</h3>
            <p>A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.
               eys don’t do anything that you can see! React 
               uses them internally to keep track of lists. If you 
               don’t use keys when you’re supposed to, React might 
               accidentally scramble your 
               list-items into the wrong order.</p>
            {arr.map((color)=>{
                return <button key={color} onClick={color}>{color}</button>
            })}
        </div>
    )
}

export default Map;