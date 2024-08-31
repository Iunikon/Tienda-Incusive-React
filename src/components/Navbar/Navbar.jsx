import { useNavigate } from 'react-router-dom';
import Navitem from './Navitem.jsx';
import { categories } from '../../mock/mockData.js';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Necesario para usar la navegación programática

  const handleGoToCheckout = () => {
    navigate("/cart");
  };
  

  return (
    <nav className="fixed top-2 left-0 right-0 bg-slate-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border border-slate-200 z-50 mx-auto text-slate-600 p-4 rounded-full max-w-3xl shadow-sm">
      <div className="flex justify-center items-center">
        <ul className="flex space-x-2 items-center">
          <Link to="/" className="mx-4 hover:scale-105 transform transition">
            <img src="/images/Logo-webpage.png" alt="Logo website" />
          </Link>
          {categories.map((category) => (
            <Navitem key={category.id} category={category} />
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2.5 text-sm font-semibold bg-transparent rounded-full ml-1 focus:text-white hover:text-white hover:bg-violet-600 focus:bg-violet-600 focus:outline-none focus:shadow-outline transition duration-250 ease-in-out ${
                isActive ? 'bg-violet-600 text-white' : ''
              }`
            }
          >
            Contacto
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2.5 text-sm font-semibold bg-transparent rounded-full ml-1 focus:text-white hover:text-white hover:bg-violet-600 focus:bg-violet-600 focus:outline-none focus:shadow-outline transition duration-250 ease-in-out ${
                isActive ? 'bg-violet-600 text-white' : ''
              }`
            }
          >
            About
          </NavLink>
          <CartWidget onClick={handleGoToCheckout} /> {/* Ajuste aquí */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
