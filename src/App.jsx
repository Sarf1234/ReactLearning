import React from 'react'
import Propspass from './Propspass';
import "./css/App.css"
import CounterApp from './CounterApp';
import RandomQuestos from './RandomQuetos';
import UseEffect from './UseEffect';

function App(){
    
    return(
        <div className='center'>
            <Propspass name="sarf raj"  anything="i dont know"/>
            <CounterApp />
            <RandomQuestos />
            <UseEffect />
        </div>
    )
}

export default App;