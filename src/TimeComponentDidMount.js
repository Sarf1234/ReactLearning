import React from "react";

class TimeComponentDidMount extends React.Component{
    constructor(props){
        super(props)
        this.state = {time : new Date()}
    }

    render(){
        return(
            <div style={{background : "black", color:"white", width : "60%", margin : "auto"}}>
                <h1>Here is the timer</h1>
                <p>i am using componentDidMount</p>
               {this.state.time.toLocaleTimeString()}
            </div>
        )
    }

    componentDidMount(){
        let timer = 1000;
        setInterval(() =>{
            this.setState({time : new Date()})
        }, timer)
    }
}


export default TimeComponentDidMount;