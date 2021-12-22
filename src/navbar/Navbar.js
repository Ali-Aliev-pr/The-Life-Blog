import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Life Blog</h1>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/create">Create blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;