import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
        <LeftSide/>
        <RightSide/>
    </div>
  )
}

export default Main