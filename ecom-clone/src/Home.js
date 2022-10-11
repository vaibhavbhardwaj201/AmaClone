import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src="images/Amazon-Prime-380.jpg" alt='Amazonimage'/>
        
        <div className='home__row'>
          <Product
          id="1" 
          title="The Lean Startup"
          price={30}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={5}/>
        
        </div>
        <div className='home__row'>
          <Product id="2" 
          title="New HP 15 Laptop"
          price={499}
          image="https://m.media-amazon.com/images/I/71rmymgVWVL._AC_SX679_.jpg"
          rating={4}/>
          <Product id="3" 
          title="Cyber Speakers"
          price={20}
          image="https://m.media-amazon.com/images/I/81cONLwCNNL._AC_SX425_.jpg"
          rating={4}/>
        </div>
        </div>
        </div>
  )
}

export default Home