import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
function Header(props) {
  return (
    <div className="header">
      <Link to='/' className="logo-container">
          <Logo className="logo"/>
      </Link>
      <div className="option">
        <Link  to='/shop' className="option">
          SHOP
        </Link>
        <Link  to='/' className="option">
          CONTACT
        </Link>      
      </div>
    </div>
  );
}
export default Header;