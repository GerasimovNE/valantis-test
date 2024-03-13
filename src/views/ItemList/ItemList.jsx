import React from 'react';
import { Item } from './Item/Item';

export class ItemList extends React.Component {

 render(){
    return <div>
            {this.props.items?.map((item, index) => (
                <Item
                    id={item.id}
                    product={item.product}
                    price={item.price}
                    brand={item.brand}
                    key={index}
                />
            ))}
        </div>
 }
  }
