import React from "react";
import './css/counter.css'

const Propspass = (props) =>{
    return(
        <div className="counter">
        <h2>Hello my name is {props.name}</h2>
        <p>this the pass prosps {props.anything}</p>
        </div>
    )
}

export default Propspass;