import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image src="/images/telephone.png" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>012 345 6789</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Events</li>
          <Image src="/images/logo.png" alt="Pizza Next Logo" width="80px" height="80px" />
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
          <li className={styles.listItem}>Products</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart.png" width="30px" height="30px" />
          <div className={styles.counter}>3</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar