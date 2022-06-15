import React from "react";
import DistructureObject from './DistructureObject';


function Map(){
    const arr = ['green', 'yellow', 'pink', 'black'];


// array of object

const arrayofObjects = [
    {
      title: "Yummmmmmm",
      src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
      title: "Hey Guys!  Wait Up!",
      src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
      title: "Yikes",
      src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
  ];


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
               <h2>array map</h2>
            {arr.map((color)=>{
                return <button key={color} onClick={color}>{color}</button>
            })}


            <h2>array of object maps</h2>

             {arrayofObjects.map((pic) =>{
                 return(
                     <div>
                         <h3 >{pic.title}</h3>
                         <img src={pic.src} alt={pic.title}  width={100} height={100}/>
                     </div>
                 )
             })}

           <DistructureObject />

        </div>
    )
}

export default Map;