import React,{Component} from 'react'

class Header extends Component{
    render(){
      return <h1 style={{padding:20}}>Welcome from {this.props.title} </h1>
    }
  }

export default Header