import React from 'react'
import styles from './Balance.module.css';
import logo from '../img/logo.svg'
const Balance = () => {
  return (
    <div className={styles.container}>
        <div className={styles.balance}>
            <p className={styles.balanceText}>My balance</p>
            <p className={styles.balanceAmount}>$921.48</p>
        </div>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Balance