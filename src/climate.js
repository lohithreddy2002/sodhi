import React,{Component}from 'react'
import axios from 'axios'
export default class Climate extends Component{
    constructor() {
        super();
        this.state={
                temp: 'fetching'
        };
    }

    render(){
    return(
    <div>
        <h1>temperature is : {}</h1>
    </div>
    );}
}
