import { ArrowRightToSquare, Bars, PersonPlus } from "@gravity-ui/icons";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-2 md:px-5">
        
        {/* Navbar Start */}
        <div className="navbar-start">
          
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Bars size={24} />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href="/">Home</NavLink>
              </li>

              <li>
                <NavLink href="/animals">All Animals</NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a className="flex items-center gap-1 md:gap-2 cursor-pointer">

            <h2 className="text-lg sm:text-2xl md:text-3xl font-black whitespace-nowrap bg-linear-to-r from-green-700 via-emerald-500 to-lime-400 bg-clip-text text-transparent drop-shadow-sm">
              Qurbani Hat
            </h2>
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg xl:text-xl font-bold text-green-800 gap-2 items-center">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>

            <li>
              <NavLink href="/animals">All Animals</NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          <a className="btn btn-sm md:btn-md border-0 bg-linear-to-r from-green-600 via-emerald-500 to-lime-500 text-white text-xs sm:text-sm md:text-base font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
            <span className="hidden sm:block">Sign Up</span>
            <PersonPlus size={18} />
          </a>

          <a className="btn btn-sm md:btn-md border-0 bg-linear-to-r from-[#14532d] via-[#16a34a] to-[#84cc16] text-white text-xs sm:text-sm md:text-base font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
            <span className="hidden sm:block">Sign In</span>
            <ArrowRightToSquare size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;