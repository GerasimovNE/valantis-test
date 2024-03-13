import React from "react";
import './Item.css'


export const Item = (props) =>{
    return(<div className="Item">
        <div>id: {props.id}</div>
        <div>product: {props.product}</div>
        <div>price: {props.price}  brand: {props.brand}</div>       
    </div>)
}