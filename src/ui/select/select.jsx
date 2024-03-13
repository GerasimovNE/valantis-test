import React from 'react';
import './select.css'
export class Select extends React.Component {

 render(){
    return <select className='select' onChange={this.props.onChange} value={this.props.value}>
        {this.props.options.map((option,index)=><option key={index} value={option.value}>{option.label}</option>)}
            </select>
 }
  }
