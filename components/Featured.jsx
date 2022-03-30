import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Featured.module.css';

const Featured = () => {
	const [index, setIndex] = useState(0);
	const images = [
		'/images/featured.jpg',
		'/images/featured2.jpg',
		'/images/featured3.jpg',
	];

	const handleArrow = direction => {
		if (direction === 'l') {
			setIndex(index !== 0 ? index - 1 : 2);
		}
		if (direction === 'r') {
			setIndex(index !== 2 ? index + 1 : 0);
		}
	};

	return (
		<div className={styles.container}>
			<div
				className={styles.arrowContainer}
				style={{ left: 0 }}
				onClick={() => handleArrow('l')}
			>
				<Image src="/images/arrowl.png" layout="fill" objectFit="contain" />
			</div>
			<div
				className={styles.wrapper}
				style={{ transform: `translateX(${-100 * index}vw)` }}
			>
				{images.map((image, i) => (
					<div className={styles.imgContainer}>
						<Image src={image} key={i} layout="fill" objectFit="cover" />
					</div>
				))}
			</div>
			<div
				className={styles.arrowContainer}
				style={{ right: 0 }}
				onClick={() => handleArrow('r')}
			>
				<Image src="/images/arrowr.png" layout="fill" objectFit="contain" />
			</div>
		</div>
	);
};

export default Featured;
