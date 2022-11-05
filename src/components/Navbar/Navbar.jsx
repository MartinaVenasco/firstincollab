import "./index.css";
import logo from "../../logo.svg";
import { IconContext } from "react-icons/lib";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useState } from "react";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"




const Navbar = ({ onLogOutClick }) => {


  const UserN = localStorage.getItem("username");
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const logOutU = () => {
    (<img className="logo" src={logo} alt="logo"></img>)(
      localStorage.removeItem("username")
    );
    onLogOutClick(true);
  };
  
  return (
    <IconContext.Provider
      value={{
        color: "orange",
        style: { width: "1.5em", height: "1.5em" },
        attr: { className: "usericon" },
      }}
    >
      <img className="logo" src={logo} alt="logo"></img>

      <ul className="Navbar__list">
        {" "}
        <FaUserCircle />
        <li>
          <a href="/">{UserN}</a>
        </li>
        <li className="logout">
          <a href="/" onClick={logOutU}>
            <RiLogoutCircleRLine />
          </a>
        </li>
      </ul>
      <nav className="NavBar_hamb">
      <button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}
</button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li onClick={() => closeMenu()}>
            {" "}
            <a  className="list_menu_hamb" href="/">ABOUT</a> <a  className="list_menu_hamb" href="/">MyFriends</a>
          </li>{" "}
        </ul>
      </nav>
   
    </IconContext.Provider>
  );
};

export default Navbar;
