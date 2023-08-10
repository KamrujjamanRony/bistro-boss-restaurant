import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error));
  }
  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-gray-200 hover:font-semibold rounded-none py-5"
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="hover:text-gray-200 hover:font-semibold rounded-none py-5"
        >
          CONTACT US
        </Link>
      </li>
      <li>
        <Link
          to={isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home"}
          className="hover:text-gray-200 hover:font-semibold rounded-none py-5"
        >
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link
          to="/menu"
          className="hover:text-gray-200 hover:font-semibold rounded-none py-5"
        >
          OUR MENU
        </Link>
      </li>
      <li>
        <Link
          to="/shop/salad"
          className="hover:text-gray-200 hover:font-semibold rounded-none py-5"
        >
          OUR SHOP
        </Link>
      </li>
      {
        user?.role === 'admin' ? '' :
        <li>
        <Link to="/dashboard/my-cart" className="btn py-5 bg-inherit border-0 text-white">
          <FaShoppingCart />
          <div className="badge badge-secondary badge-xs">{cart?.length || 0}</div>
        </Link>
      </li>
      }
      <li>
        {
          user ? 
          <button
          onClick={handleLogOut}
          className="hover:bg-red-200 hover:text-black hover:font-semibold pb-10"
        >
          Log Out
        </button>
        : 
        <Link
          to="/login"
          className="hover:text-gray-200 hover:font-semibold rounded-none py-5"
        >
          Login
        </Link>
        }
      </li>
      {
        user ?
        <>
        <span className="ml-2">{user?.displayName}</span>
          <li>
        <Link to="/profile" className="py-5">
          <img className="rounded-full" width={40} src={user?.photoURL} alt="" />
        </Link>
      </li>
        </>
        : ""
      }
    </>
  );
  return (
    <div className="navbar bg-black text-white fixed z-10 bg-opacity-30 px-10 py-0 justify-between">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] px-2 shadow bg-gray-600 w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-2 py-0 items-center">
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
