import React from 'react';
import './input.css'

export class Input extends React.Component {

 render(){
    return <input type={this.props.type} onChange={this.props.onChange} value={this.props.value} className='input'/>
 }
  }
