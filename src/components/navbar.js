import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Work">Work</Link></li>
        <li><Link to="/Education">Education</Link></li>
        <li><Link to="/Experience">Experience</Link></li>    
      </ul>
    </nav>
  );
};

export default Navbar;