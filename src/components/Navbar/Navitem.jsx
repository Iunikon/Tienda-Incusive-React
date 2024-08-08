import { Link, NavLink } from "react-router-dom";

const Navitem = ({ category }) => {
  return (
      <Link
        className="px-4 py-2.5 text-sm font-semibold bg-transparent rounded-full ml-1 focus:text-white hover:text-white hover:bg-violet-600 focus:bg-violet-600 focus:outline-none focus:shadow-outline"
        to={`/category/${category}`}>
        {category}
      </Link>
  );
}

export default Navitem;
