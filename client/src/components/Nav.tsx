import { Link, NavLink } from 'react-router-dom';


const Nav: React.FC = () => (
  <nav className="flex justify-between p-4 bg-blue-500 text-white">
    <p> Hello World</p>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);

export default Nav;