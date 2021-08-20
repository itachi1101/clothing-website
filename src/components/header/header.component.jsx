import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';// it is a higher order function
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-drop-down/cart-dropdown.component'
import './header.cpmponent.scss';
const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link to='/'>
        <Logo className='logo'/>


        </Link>
        <div className='options'>
        <Link className ='option' to='/shop'>
        SHOP    
        </Link>
        <Link className='option' to='/contact'>
        CONTACT
        </Link>
        {
            currentUser?(
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            ):
            (
            <Link className='option' to='/signin'>SIGN IN</Link>
            )}
        <CartIcon/>
        </div>
        {
            hidden?null:
            <CartDropdown/>
        }
    </div>
)
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
  currentUser,
  hidden  
})
export default connect(mapStateToProps)(Header);