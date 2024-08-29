import { NavLink } from "react-router-dom";

const Navitem = ({ category }) => {
  return (
    <NavLink
      to={`/category/${category}`}
      className={({ isActive }) =>
        `px-4 py-2.5 text-sm font-semibold bg-transparent rounded-full ml-1 focus:text-white hover:text-white hover:bg-violet-600 focus:bg-violet-600 focus:outline-none focus:shadow-outline transition duration-250 ease-in-out ${
          isActive ? 'bg-violet-600 text-white' : ''
        }`
      }
    >
      {category}
    </NavLink>
  );
};

export default Navitem;
