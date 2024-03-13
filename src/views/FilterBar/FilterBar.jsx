import React from 'react'
import { Button } from '../../ui/button/button'
import { Input } from '../../ui/input/input'
import { Select } from '../../ui/select/select'
import './FilterBar.css'

export class FilterBar extends React.Component {
   constructor(props){
    super(props)
       this.state={select:'product',input:''}
    }
    selectChange = select =>{this.setState({select:select})}
    
    inputChange = input =>{this.setState({input:input})}

    handlerFilt = async () => {
                
                const params = {[this.state.select]:this.state.select==='price'?parseFloat(this.state.input):this.state.input===''&&this.state.select==='brand'?null:this.state.input}
                  this.props.getFilterIds(params)
              };
    handlerDefault = () =>{
        this.setState({input:''})
        this.props.clearFilt()
    }
  
 render(){
    const options = [{value:'product',label:'product'},{value:'brand',label:'brand'},{value:'price',label:'price'}]
    return<div className='FilterBar'>
        <Select onChange={(e)=>this.selectChange(e.target.value)} value={this.state.select} options={options}/>
             <div><Input type={this.select === 'price'?'number':'text'} value = {this.state.input} onChange={(e)=>{this.inputChange(e.target.value)}}/>
        <Button onClick={this.handlerFilt} label='filt'/></div>
        <Button onClick={this.handlerDefault} label='clear'/>
    </div>
}}