import React from "react";
import styles from "./ChartItem.module.css";
const ChartItem = ({ data }) => {
  return (
    <div>
      <div className={styles.item} style={{height:data.amount*3}}>
        <div className={styles.amount}>{data.amount}</div>
      </div>
      {data.day}
    </div>
  );
};

export default ChartItem;
