// React Icons
import { FiMenu } from "react-icons/fi";
// Context
import { useGlobalContext } from "../../context";

const NavbarMenu = () => {
  const { showSlider, setShowSlider } = useGlobalContext();
  return (
    <button
      className='navbar-menu'
      aria-label='Open Navbar'
      onClick={() => {
        setShowSlider(!showSlider);
      }}
    >
      <FiMenu />
    </button>
  );
};

export default NavbarMenu;
