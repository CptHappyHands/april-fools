import React from "react";
import logo from "../EDHRECLogo.png";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.background}>
      <img src={logo} alt="logo" className={styles.header}></img>
    </div>
  );
}

export default Header;
