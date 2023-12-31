import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
    const { user,logOut } = useContext(AuthContext)

    const handleSingOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const Navlinks = <>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/login'>Login</Link></li>
        <li> <Link to='/testimonilas'>Testimonials</Link></li>
    </>
    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}
                    </ul>
                </div>
                <div>
                    <div className="w-20 rounded-full">
                        <img src="https://i.ibb.co/YjFhwZ1/nav.png" alt="img" />
                    </div>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?<div className="flex items-center gap-2">
                        <h3 >{user.displayName}</h3>
                        <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                        <button onClick={handleSingOut} className="btn">Sign Out</button>
                       </div>
                        :
                        <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;