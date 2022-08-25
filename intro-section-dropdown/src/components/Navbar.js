import React,{useState} from "react";

import styles from "./Navbar.module.css";
import logo from "../img/logo.svg";
import arrowDown from "../img/icon-arrow-down.svg";
import Features from "./Features";
import Company from "./Company";
const Navbar = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} className={styles.logo} alt=""/>
        <p onMouseEnter={()=>{setFeatures(true)}} onMouseLeave={()=>{setFeatures(false)}} className={styles.features}>
          Features <span><img src={arrowDown} alt="" /> </span>
          {features && <Features/>}
        </p>
        <p onMouseEnter={()=>{setCompany(true)}} onMouseLeave={()=>{setCompany(false)}} className={styles.company}>
          Company  <span><img src={arrowDown} alt="" /> </span>
          {company && <Company/>}
        </p>
        <p>
          Careers  
        </p>
        <p>
          About  
        </p>
      </div>
      <div className={styles.right}>
        <p>Login</p>
        <p className={styles.register}>Register</p>
      </div>
    </div>
  );
};

export default Navbar;
