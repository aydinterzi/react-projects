import React from 'react';
import styles from './Chart.module.css';
import data from '../data.json';
import ChartItem from './ChartItem';

const Chart = () => {
  return (
    <div className={styles.container}>
        <p style={{fontWeight:700,fontSize:"22px",marginBottom:"60px"}}>Spending - Last 7 days</p>
        <div className={styles.chart}>
            {data.map((data)=>(
                <ChartItem data={data}/>
            ))}
        </div>
        <hr />
        <div className={styles.amount}>
            <div>
                <p className={styles.amountText}>Total this month</p>
                <p className={styles.totalAmount}>$478.33</p>
            </div>
            <div className={styles.month}>
                <p className={styles.monthAmount}>+2.4%</p>
                <p>from last month</p>
            </div>
        </div>

    </div>
  )
}

export default Chart