import React from 'react'
import styles from "../styles/components/blogs.module.scss"


const Review = () => {
    const emojis = [
        ["👨", "Unlocking the Power of Mindfulness", "we delve into the transformative practice of mindfulness"],
        ["👨", "Exploring the Wonders of Sustainable Travel", "we delve into the transformative practice of mindfulness"],
        ["👨", "Embracing Imperfection:", "we delve into the transformative practice of mindfulness"],
      ];


  return (
    <div style={{padding: "30px 0px", width:"60%",display: "flex", margin:"auto"}}>
    <h2 style={{ textAlign: "left"}}>HAPPY CUSTOMERS</h2>
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {emojis.map((emoji, index) => (
          <div key={index} className={styles.carousel__item}>
            <div className={styles.carousel__item__head}>{emoji[0]}</div>
            <div className={styles.carousel__item__body}>
              <p className={styles.title}>{emoji[1]}</p>
              <p>Unicode: {emoji[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Review