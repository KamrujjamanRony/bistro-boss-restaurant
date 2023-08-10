import {
  FaShoppingCart,
  FaCalendarAlt,
  FaHome,
  FaWallet,
  FaComment,
  FaCalendarCheck,
  FaBars,
  FaShoppingBag,
  FaRegEnvelope,
  FaUtensils,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import {TfiMenuAlt} from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center bg-[#F6F6F6]">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side font-cinzel font-semibold">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="uppercase text-center py-12 bg-[#D1A054]">
            <h1 className="text-4xl font-bold tracking-[.05em]">bistro boss</h1>
            <h3 className="text-2xl font-semibold tracking-[.4em]">
              restaurant
            </h3>
          </div>
          <ul className="menu p-4 w-80 h-full text-xl bg-[#D1A054]">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/admin-home">
                    <FaHome /> admin home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-item">
                    <FaUtensils /> add item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-items">
                    <TfiMenuAlt /> manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-booking">
                    <FaBook /> manage booking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-users">
                    <FaUsers /> all users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/user-home">
                    <FaHome /> USER HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendarAlt /> RESERVATION
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment-history">
                    <FaWallet /> PAYMENT HISTORY
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-cart">
                    <FaShoppingCart /> MY CART
                    <span className="badge badge-secondary">
                      {cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-review">
                    <FaComment /> ADD REVIEW
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-booking">
                    <FaCalendarCheck /> MY BOOKING
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaBars /> MENU
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <FaShoppingBag /> SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaRegEnvelope /> CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
