import "./Navbar.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const NavBar = () => {
  const [tgm, setTgm] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setTgm(!tgm);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <>
      <nav>
        {(tgm || screenWidth > 600) && (
          <>
            <div className="navv">
              <div>
                <img
                  src="http://d20az30pqn13cl.cloudfront.net/images/205736/original/logo-min-dc58330cce5b2d5f9b1aebc85c135f57.png"
                  alt="logo"
                />
              </div>
              <div id="location">
                {/* {!tgm ? <FmdGoodIcon /> : ""} */}
                <FmdGoodIcon />
                <select className="sel-location">
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bangoalore">Bangoalore</option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>

              <div className="search_wrap search_wrap_3">
                <div className="search_box">
                  <input type="text" className="input" placeholder=" Search" />
                  <div className="iconbtn">
                    <SearchTwoToneIcon sx={{ m: "11px" }} />
                    {/* {!tgm ? <SearchTwoToneIcon sx={{ m: "11px" }} /> : ""} */}
                  </div>
                </div>
              </div>
              <ul>
                <div id="vendor">
                  <li className="items">
                    <a href="/vendor">Are you a vendor?</a>
                  </li>
                  <li className="items">
                    <a href="df"> hi arun.....</a>
                  </li>
                </div>
              </ul>
            </div>
            <nav id="nav1v">
              <ul className="list">
                <li className="items"><a href="Venue">VENUES</a></li>
                <li className="items">PHOTOGRAPHY</li>
                <li className="items">MAKEUP</li>
                <li className="items">MEHENDI</li>
                <li className="items">DESTINATION WEDDINGS</li>
                <li className="items">WEBSHOP</li>
                <li className="items">
                  <LocalPhoneIcon />
                  +91 9910041050
                </li>
              </ul>
            </nav>
          </>
        )}
        <button onClick={toggleNav} className="btn">
          <MenuIcon />
        </button>
      </nav>
    </>
  );
};
export default NavBar;
