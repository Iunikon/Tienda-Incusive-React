import Navitem from "./Navitem.jsx";
import { categories } from "../../mock/mockData.js";
import CartItem from "./Carticon.jsx";

const Navbar = (props) => {
  return (
    <nav className="fixed top-2 left-0 right-0 bg-slate-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border border-slate-200 z-50 mx-auto text-slate-600 p-4 rounded-full max-w-xl shadow-sm">
      <div className="flex justify-center">
        <ul className="flex space-x-2 items-center">
          <Navitem name={categories[0]} />
          <Navitem name={categories[1]} />
          <a href="#" className="hover:scale-105 transform transition">
          </a>
          <Navitem name={categories[2]} />
          <Navitem name={categories[3]} />
          <CartItem />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
