import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{

  render(){
    return(
      <div className='App'>
        <h1>Kalvium Gallery</h1>
        <div className='Gallery'>
          {this.props.imageData.map((e) => {
           return (<img src={e.img} alt='img(i)' />)
        })}
        </div>
      </div>
    );
  }
}
