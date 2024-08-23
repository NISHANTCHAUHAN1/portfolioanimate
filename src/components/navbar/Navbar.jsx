import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Skills", path: "#skills" },
    { id: 2, text: "Projects", path: "#projects" },
    { id: 3, text: "Contact", path: "#footer" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-2xl  font-extrabold text-white">
        Nishant Chauhan
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-gray-400 hover:underline m-2 cursor-pointer duration-300 text-xl font-bold"
          >
            <a href={item.path}>{item.text}</a> {/* Use Link for navigation */}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden top-9 right-6 fixed">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-sm lg:text-3xl xl:text-3xl text-center font-bold text-white m-4">
          Nishant Chauhan
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="text-center py-2 flex flex-col justify-center"
          >
            <a
              href={item.path}
              onClick={() => {
                // handleNavClick(item.path);
                setNav(!nav);
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
