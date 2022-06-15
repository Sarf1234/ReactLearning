import React from 'react'
import Propspass from './Propspass';
import "./css/App.css"
import CounterApp from './CounterApp';
import RandomQuestos from './RandomQuetos';
import UseEffect from './UseEffect';
import Map from './Map'
import ClassBaseCoprops from './ClassBaseCoprops';
import TimeComponentDidMount from './TimeComponentDidMount';




function App(){
    
    return(
        <div className='center'>
            <Propspass name="sarf raj"  anything="i dont know"/>
            <CounterApp />
            <RandomQuestos />
            <UseEffect />
            <Map />
            <ClassBaseCoprops />
            <TimeComponentDidMount />
            
        </div>
    )
}

export default App;