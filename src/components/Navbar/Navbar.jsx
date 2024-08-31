import { useNavigate } from 'react-router-dom';
import Navitem from './Navitem.jsx';
import { categories } from '../../mock/mockData.js';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate("/cart");
  };

  return (
    <nav className="fixed top-2 left-0 right-0 bg-slate-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border border-slate-200 z-50 mx-auto text-slate-600 p-4 rounded-full max-w-2xl shadow-sm">
      <div className="flex justify-center items-center">
        <ul className="flex space-x-2 items-center">
          <Link to="/" className="mx-4 hover:scale-105 w-[100px] transform transition">
            <img src="/images/Logo-webpage.png" alt="Logo website" />
          </Link>
          {categories.map((category) => (
            <Navitem key={category.id} category={category} />
          ))}

          <CartWidget onClick={handleGoToCheckout} /> 
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
