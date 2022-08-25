import React from "react";

import databiz from "../img/client-databiz.svg";
import maker from "../img/client-maker.svg";
import audiophile from "../img/client-audiophile.svg";
import meet from "../img/client-meet.svg";
import styles from "./LeftSlide.module.css";
const LeftSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <p className={styles.textPrimary}>
          Make <p>remote work</p>
        </p>
        <p className={styles.textSub}>
          Get your team in sync, no matter your location.
          <p> Streamline processes, create team rituals, and</p> watch
          productivity soar.
        </p>
        <button className={styles.button}>Learn more</button>
      </div>
      <div className={styles.footerLogos}>
        <img src={databiz} alt="" />
        <img src={audiophile} alt="" />
        <img src={meet} alt="" />
        <img src={maker} alt="" />
      </div>
    </div>
  );
};

export default LeftSide;
