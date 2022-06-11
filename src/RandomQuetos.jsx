import React from "react";
import {useState} from 'react';
import './css/random.css'


const arr = [ "We grow fearless when we do the things we fear.",
"Impossible is just an opinion.", "The secret of getting ahead is getting started.", "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.",
"All our dreams can come true if we have the courage to pursue them.","If you let your head get too big, it'll break your neck.", "Age is of no importance unless you're a cheese.",
"If you think you are too small to make a difference, try sleeping with a mosquito.",
"When life gives you lemons, squirt someone in the eye.",
"Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes.",
"Live each day like it's your second to the last. That way you can fall asleep at night.",
"I am so clever that sometimes I don't understand a single word of what I am saying."

]

const RandomQuestos = () =>{
   const [quotes, setquotes] = useState(arr[0]);

   function quotesGenter(){
         const randomnumebr = arr[Math.floor(Math.random() * arr.length)]
        setquotes(randomnumebr)  
   }


   return(
       <div className="random">
           <div className="text">"{quotes}"</div>
           <button onClick={quotesGenter}>Click me for 
           quotes</button>
       </div>
   )
      
}


export default RandomQuestos;

