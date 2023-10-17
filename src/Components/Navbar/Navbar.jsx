import { NavLink } from 'react-router-dom';
import backgroundImageUrl from '../../assets/images/more/15.jpg'
import logo from '../../assets/images/more/logo1.png'
const Navbar = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImageUrl})`, 
        backgroundSize: 'cover', 
    };
    return (
        <div style={divStyle} className='flex justify-between items-center px-[150px]' >
           <NavLink to='/' className='flex gap-4 items-center justify-center'>
           <img className='w-[60px]' src={logo} alt="" />
           <h1 className='text-white text-[40px] py-[10px] text-center'>Espresso Emporium</h1>           
           </NavLink>
           <ul className='flex gap-8 text-white text-xl font-bold'>
            <NavLink className="active:text-orange-600 hover:text-orange-600 duration-200" to='/'><li>Home</li></NavLink>
            <NavLink className="active:text-orange-600 hover:text-orange-600 duration-200" to='/users'><li>Users</li></NavLink>
            <NavLink className="active:text-orange-600 hover:text-orange-600 duration-200" to='/signup'><li>Sign Up</li></NavLink>
            <NavLink className="active:text-orange-600 hover:text-orange-600 duration-200" to='/signin'><li>Sign In</li></NavLink>
           </ul>
        </div>
    );
};


export default Navbar;