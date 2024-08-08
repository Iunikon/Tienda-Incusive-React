import Navitem from './Navitem.jsx';
import { categories } from '../../mock/mockData.js';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-2 left-0 right-0 bg-slate-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border border-slate-200 z-50 mx-auto text-slate-600 p-4 rounded-full max-w-xl shadow-sm">
      <div className="flex justify-center">
        <ul className="flex space-x-2 items-center">
          <Link to="/" className="mx-4 hover:scale-105 transform transition">
            <img src="/images/Logo-webpage.png" alt="Logo website" />
          </Link>
          {categories.map((category, id) => (
            <Navitem key={id} category={category} />
          ))}
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
