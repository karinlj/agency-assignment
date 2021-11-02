import { useState, useEffect } from "react";
import Navlinks from "./Navlinks";
import ToggleBtn from "./ToggleBtn";

const NavBar = ({ products, clickLink }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
    setBtnClicked(!btnClicked);
  };
  const handleClickLink = (id) => {
    clickLink(id);
    if (mobileOpen) {
      setMobileOpen(false);
    }
    if (btnClicked) {
      setBtnClicked(false);
    }
  };
  //prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("no_scroll", mobileOpen);
  }, [mobileOpen]);

  return (
    <header className="nav_header" id="nav">
      <div className="row no-gutters">
        <div className="col">
          <nav className="navbar bigscreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 472 112"
              alt="logo"
              className="logo"
            >
              <path
                d="M287.2-0.1V0h22.5v-0.1H287.2z M472,0H309.6l0,0v11.6h-22.5V0H0v20.5h22.2V28c3.7-4.3,4-3.8,7.4-5.9
	c3.4-2.1,10.3-3.5,15.2-3.5c6.6,0,13.2,2.7,16.9,7.4c3.7,4.7,4.2,12,4.2,21.8v47.4H44.2v-46c0-4.7-0.7-8-2.2-9.9
	c-1.5-1.9-5.8-2.9-8.5-2.9c-2.9,0-7.6,1.3-9.4,3.9c-1.8,2.6-2,12.4-2,19.2v35.8H0V112h409.1c-5.1-4.6-7.3-9.2-8.1-18.8h22.3
	c-0.8,2,1.7,7.8,6,10c2,1.5,5.7,1.5,8.7,1.5c3.8,0,7.4-0.8,9.2-3c1.9-2.2,2.2-3.7,2.2-9.2v-9.3c-2.6,3.3-4.2,2.7-6.8,4.2
	c-4.1,2.3-9.2,3.4-13.9,2.8c-9.5-1.1-17-5.1-22.1-11.4c-5.2-7.4-6-14.4-6-24.6c0-11.6,2.9-19.8,8.1-25.9c5.2-6.1,11-10.2,19.4-10.2
	c5.4,0,10.1,0,13.6,2c3.5,2,5.1,3.9,9.5,6.4v-6.4h21 M409.1,112c0.1,0.1,0.1,0.1,0.2,0.2 M0,20.5 M163.7,0.2l22.2,0.1v21H199v14.2
	h-13.2v31.2c0,3.2,0.2,9,0.8,10c2.1,3.4,5.6,2.1,12.1,2.2l0.2,17c-6.1,1.5-8,1-13.3,1c-6.1,0-10.9-0.6-13.8-2.4
	c-2.9-1.8-5-4.6-6.4-8.3c-1.4-3.7-1.8-10.1-1.8-18.4V35.3H153V21.2h10.7V0.2z M207.5,0.2h23.2l-0.3,27.6c3.2-4,4.8-5.3,8-7
	c3.2-1.7,9.3-2.9,13.7-2.9c6.5,0,13.2,3,17,7.8c3.7,4.7,5.2,12.3,5.2,22.1l-0.3,47.1h-22.2V49.1c0-4.7-0.7-8-2.2-9.9
	c-1.4-1.9-5.8-2.9-8.4-2.9c-2.9,0-6.5,1.3-8.3,3.9c-1.8,2.6-2.7,7.3-2.7,14.1v40.5h-22.5V0.2z M367,18.2c6.5,0,13.6,2,17.2,6.7
	c3.7,4.7,4.8,13,4.8,22.8v46.8h-22.2V48.4c0-4.7-0.7-8-2.2-9.9c-1.4-1.9-6.1-2.9-8.7-2.9c-2.8,0-6.2,1.3-7.9,3.9
	c-1.8,2.6-2.6,7.3-2.6,14.1v40.9H323V20.2h21.8V27c2.5-2.3,2.5-2.5,5.9-4.6C354.1,20.2,362.2,18.2,367,18.2L367,18.2z M113.8,18.5
	c13.8,0,24.2,4.4,31.2,13.1c5.7,7,8.5,15.6,8.5,25.9c0,11.5-3.5,21-10.5,28.3c-7,7.4-16.7,11-29.1,11c-11.1,0-20.3-2.7-27.2-8.8
	c-8.4-7.6-12.2-17.8-12.2-30.1c0-11.4,3.9-21.5,11-28.9C92.5,21.5,101.7,18.5,113.8,18.5L113.8,18.5z M287.2,20.2h22.5v74.6h-22.5
	V20.2z M436.2,34.2c-3.4,0-8.5,1.3-10.5,4c-2,2.7-3,11.1-3,17.3c0,5.4,1.1,11.7,3.2,14.3c2.1,2.6,7.3,3.9,10.8,3.9
	c3.3,0,7.7-1.3,10-4c2.2-2.7,3.4-9.1,3.4-14.6c0-5.4-1.2-13.6-3.5-16.5C444.1,35.7,439.6,34.2,436.2,34.2z M114.2,35.2
	c-3.8,0-10.1,2.3-12.6,5.5c-2.5,3.2-5.1,10.5-5.1,17.1c0,6.7,2.9,14,5.4,17.2c2.5,3.2,8.3,4.8,12,4.8c3.8,0,10-2.3,12.4-5.4
	c2.4-3.1,5-9.9,5-16.8c0-6.5-2.3-13.7-4.7-16.8C124.2,37.5,117.8,35.2,114.2,35.2z"
              />
            </svg>
            <ToggleBtn handleClick={toggleMenu} btnClicked={btnClicked} />
          </nav>
          {/* toggle open-class */}
          <nav className={`navbar mobile ${mobileOpen ? "open" : ""}`}>
            <Navlinks clickLink={handleClickLink} products={products} />
          </nav>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
