import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className="checkout__ad"  src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt=""/>
  
      <div><h2 className='checkout__title'>Your shopping basket</h2></div>
      {basket.map(item =>(
        
  
  
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}/>


      ))}
      </div>
      <div className='checkout__right'>
       <Subtotal />    
        <h2>The subtotal will go here</h2>
      </div>
      
      </div>

    )
}

export default Checkout