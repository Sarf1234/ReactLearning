import React from "react";

const distruture = [
    {firstName : "sarfraj", lastName : "shekh", age : 20},
    {firstName : "suraj", lastName : "paswan", age : 20},
    {firstName :"nitesh", lastName :"singh", age : 20},
    {firstName :" honey", lastName : "singh", age : 20},{firstName : "naseem", lastName : "khan", age : 20} 
]

const DistructureObject = (props) => {

      
       return(
        <div>
            <h1>here i am learing distructure object and spread oprator and map to element or componant</h1>
            {distruture.map(distruct =>{
                const {firstName, lastName, age} = distruct;
               return(
                <p>{`the name is ${firstName} ${lastName} and the age is ${age}`}</p>
               )
            })}
        </div>
       )
}

export default DistructureObject;