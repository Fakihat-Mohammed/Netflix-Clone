import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/netflixLogo.svg";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBox from "@mui/icons-material/AccountBox";
// import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
const Header = () => {
  return (
    <div className={styles.header_outer_container}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <ul>
            <li>
              <img src={logo} width={100} />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className={styles.header_right}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
            <li>
              <AccountBox />
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
