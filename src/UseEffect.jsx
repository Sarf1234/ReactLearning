import {useState, useEffect} from "react";
import './css/counter.css'


function UseEffect(){
     const [counter, setCounter] = useState(0);

     useEffect(()=>{
         alert(`here is counter update ${counter}`)
     }, [counter])
    

     function Increase(){
         setCounter(prev => prev + 1)
     }
     function Decrease(){
        setCounter(prev => prev - 1)
    }

    return(
        <div className="counter">
            <h1>{counter}</h1>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
        </div>
    )
}

export default UseEffect