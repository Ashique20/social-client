import { signOut } from "@firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth)
  return (
    <div>
      <div className="navbar bg-primary ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'><a> <img className="w-5" src="https://cdn-icons-png.flaticon.com/512/5895/5895964.png"/></a></Link></li>
            <li><Link to='media'><a>Media</a></Link></li>
            <li><Link to='media'><a>Media</a></Link></li>
            <li><Link to='media'><a>Media</a></Link></li>

             
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><Link to='/'><a> <img className="w-5" src="https://cdn-icons-png.flaticon.com/512/5895/5895964.png"/></a></Link></li>
            <li><Link to='media'><a>Media</a></Link></li>

            <li><a>Message</a></li>
            <li><Link to='/about'><a>About</a></Link></li>
            
          </ul>
        </div>
        <div className="navbar-end">
      
              {user?.uid ? <button className="text-white btn  border-white border-6" onClick={() => signOut(auth)}><h1 >Sign out</h1></button>
                : <Link className="text-white btn  border-white border-6"  to="/login"><h1>Login</h1></Link>}



           
  </div>
      </div>
    </div>
  )
}

export default Navbar;