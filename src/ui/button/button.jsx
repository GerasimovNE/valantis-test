import React from 'react';
import './button.css'

export class Button extends React.Component {

 render(){
    return <button disabled={this.props.disabled} onClick={this.props.onClick} className='button'>{this.props.label}</button>
 }
  }
