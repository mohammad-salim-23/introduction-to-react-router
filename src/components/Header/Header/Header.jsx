import { Link,NavLink } from "react-router-dom";
import './Header.css'



const Header = () => {
    return (
        <div>
           <h2>Navbar</h2>
           <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link to="/posts">Posts</Link>
            
            <Link to="/contact">Conttact</Link>
            <Link to="/users">Users</Link>
           
       
           </nav>
          
            
        </div>
       
    );
};

export default Header;