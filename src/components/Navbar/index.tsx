import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline";
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Products
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
		<li className="text-black/60">
			jesus@lootvoid.com
		</li>
        <li>
          <NavLink
            to="/my-order"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            My Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
