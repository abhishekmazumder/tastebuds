import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
  return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Image src="/images/bg.png" layout="fill" objectFit='cover' />
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.motto}>
						Refresh Your Taste Buds. With Our Fresly Baked Pizza!
					</h2>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Find Our Resturant</h1>
					<p className={styles.text}>
						Sreekanan Pally, Batanagar,
						<br />
						Kolkata - 700140
						<br /> 98366-43763
					</p>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Working Hours:</h1>
					<p className={styles.text}>
						Monday - Friday
						<br /> 9:00 - 22:00
					</p>
					<p className={styles.text}>
						Saturday & Sunday
						<br /> 12:00 - 24:00
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer