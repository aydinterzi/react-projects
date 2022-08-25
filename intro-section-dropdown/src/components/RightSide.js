import React from "react";
import image from '../img/image-hero-desktop.png';

import styles from "./RightSlide.module.css";
const RightSide = () => {
  return (
    <div className={styles.container}>
      <img src={image} alt="" className={styles.img}/>
    </div>
  );
};

export default RightSide;
