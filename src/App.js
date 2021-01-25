
import './App.css';
import Climate from './climate'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import axios from "axios"
import React from 'react'



// function city(){
// var city = document.getElementById('city').value;
// console.log(city)
// // async ()=>{
//   var fetched_data =  await axios.get()

//   console.log(fetched_data)
  
//   var data_pared = JSON.parse(fetched_data);
//   var key = data_pared["key"]
//   console.log(key)
// };


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {value:""};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(event){
    this.setState({value:event.target.value});
    // console.log(this.state.value)
  }

  componentDidMount(){
    axios.get('')
    .then(response=>{
        console.log(response)
        this.setState({posts:response.data,loading:false})
        Data= this.state.posts
        console.log(Data)
    })
    .catch(error=>{
        console.log(error)
        this.setState({errorMsg:"Error Retriving Data"})
    })
}
  handleSubmit(event){
    console.log(this.state.value)
    

    // var fetched_data =axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hS6cxgxbN9YrUyoO2EulA6tKOu0AFVNm&q=${this.state.value}`)
    console.log(fetched_data)
    var key = JSON.parse(fetched_data)['Key']
    console.log(key)    
event.preventDefault();
  }
  render(){
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>city:<br/>
        <input  type="text" value={this.state.value} onChange={this.handleChange}/></label>
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  );
}
}

export default App;
