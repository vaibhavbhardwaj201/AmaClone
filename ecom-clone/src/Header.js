import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to="/">
        <img className='header__logo' alt='amazon-img' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        <div className='header__search'>
            <input className='header__searchInput' type="text"/>
              <SearchIcon className='header__searchIcon'/>    
               {/*logo*/}
        </div>
        <div className='header__nav'>
          <div className='header__option'>
            <span className='headrer__optionLineOne'>Hello Boby</span>
             <span className='header__optionLineTwo'> Sign In</span>
          </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns </span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your </span>
            <span className='header__optionLineTwo'>Prime</span>
            </div>
            <Link to="/checkout">
            <div className='header__optionBasket'>
             <ShoppingBasket/>
             <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
            </div>
            </Link>
        </div>
       
     </div>
     )
}

export default Header