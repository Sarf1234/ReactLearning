import React from "react";
import Button from "./Button";


class ClassBaseCoprops extends React.Component{
    talk(){
        let speach = ""
        for(let i = 0; i < 200; i++){
            speach += "hello"
        }

        alert(speach);
    }
    
    
  render(){
    return(
        <div>
            <h1>class base Component</h1>
            <Button  talk={this.talk}/>
        </div>
    )
  }
}

export default ClassBaseCoprops;