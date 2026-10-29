import './Header.css';
import { Link } from "react-router-dom";

const Header = ({ logout }) => {
  return (
    <header className="modern-header">
      <div className="header-container">
        <div className="brand-box">
          <span className="brand-icon">Product</span>
          <span className="brand-name">Mart</span>
        </div>

        <nav className="header-menu">
           <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/signin">Profile</Link>
          {/* <Link to="/signup">Redux</Link> */}
            <Link to="/contactus">Contact Us</Link>
            <Link to="/optional">Additional Content</Link>
            <Link to="/" id="logout" onClick={logout}>Logout</Link>

        </nav>

        {/* <div className="header-actions">
          <button className="header-btn login-btn">Login</button>
          <button className="header-btn signup-btn">Sign Up</button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;