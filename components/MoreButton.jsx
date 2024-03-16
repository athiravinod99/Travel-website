/* 
* Button component to show more content
*/

import React from 'react'
import styles from "../styles/components/more-button.module.scss";

const MoreButton = (props) => {
  return (
    <button className={`${styles.button} ${styles.learnMore}`}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span className={styles.buttonText}>{props.buttonText}</span>
    </button>
  )
}

export default MoreButton