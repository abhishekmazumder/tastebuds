import React from 'react';
import styles from "../styles/PizzaCard.module.css"
import Image from "next/image"

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src= "/images/pizza.png" width="500" height="500" />
      <h1 className={styles.title}>Fiori Pizza</h1>
      <span className={styles.price}>Rs. 550</span>
      <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default PizzaCard