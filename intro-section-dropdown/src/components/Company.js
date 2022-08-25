import React from 'react';

import styles from './Company.module.css';
const Company = () => {
  return (
    <div className={styles.container}>
        <ul>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
        </ul>
    </div>
  )
}

export default Company