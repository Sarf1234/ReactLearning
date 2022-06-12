import React from 'react'
import Propspass from './Propspass';
import "./css/App.css"
import CounterApp from './CounterApp';
import RandomQuestos from './RandomQuetos';
import UseEffect from './UseEffect';
import Map from './Map'

function App(){
    
    return(
        <div className='center'>
            <Propspass name="sarf raj"  anything="i dont know"/>
            <CounterApp />
            <RandomQuestos />
            <UseEffect />
            <Map />
        </div>
    )
}

export default App;