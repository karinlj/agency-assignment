import { useState, useEffect } from "react";
import Navlinks from "./Navlinks";
import ToggleBtn from "./ToggleBtn";
import logo from "../assets/logo.svg";

const NavBar = ({ products, clickLink }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
    setBtnClicked(!btnClicked);
  };

  const handleClickLink = (id) => {
    clickLink(id);
    //click on link -> menu closing
    //click on link -> class changing in ToggleBtn
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
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar bigscreen">
              <img src={logo} alt="logo" className="logo" />
              {/* <Navlinks /> */}
              <ToggleBtn handleClick={toggleMenu} btnClicked={btnClicked} />
            </nav>
            {/* toggle open-class */}
            <nav className={`navbar mobile ${mobileOpen ? "open" : ""}`}>
              <Navlinks clickLink={handleClickLink} products={products} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
