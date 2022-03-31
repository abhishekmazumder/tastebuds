import React, {useState} from 'react';
import styles from '../../styles/Product.module.css';
import Image from 'next/image';

const Product = () => {
	const [size, setSize] = useState(0);
	const pizza = {
		id: 1,
		img: '/images/pizza.png',
		name: 'Campagnola',
		price: [19.9, 23.9, 39.9],
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a laboriosam asperiores reprehenderit blanditiis ea, eum facilis esse illum neque, culpa quod modi nemo',
	};

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<Image src={pizza.img} layout="fill" objectFit="contain" />
				</div>
			</div>

			<div className={styles.right}>
				<h1 className={styles.title}>{pizza.name}</h1>
				<span className={styles.price}>${pizza.price[size]}</span>
				<p className={styles.desc}>{pizza.desc}</p>
				<h3 className={styles.choose}>Choose Your Size:</h3>
				<div className={styles.sizes}>
					<div className={styles.size} onClick={() => setSize(0)}>
						<Image src="/images/size.png" layout="fill" />
						<span className={styles.number}>Small</span>
					</div>
					<div className={styles.size} onClick={() => setSize(1)}>
						<Image src="/images/size.png" layout="fill" />
						<span className={styles.number}>Medium</span>
					</div>
					<div className={styles.size} onClick={() => setSize(2)}>
						<Image src="/images/size.png" layout="fill" />
						<span className={styles.number}>Large</span>
					</div>
				</div>
				<h3 className={styles.choose}>Choose Additional Ingredients</h3>
				<div className={styles.ingredients}>
					<div className={styles.options}>
						<input
							type="checkbox"
							id="double"
							name="double"
							className={styles.check}
						/>
						<label htmlFor="double">Double Ingredients</label>
					</div>
					<div className={styles.options}>
						<input
							type="checkbox"
							id="garlic"
							name="garlic"
							className={styles.check}
						/>
						<label htmlFor="garlic">Garlic Sauce</label>
					</div>
					<div className={styles.options}>
						<input
							type="checkbox"
							id="cheese"
							name="cheese"
							className={styles.check}
						/>
						<label htmlFor="cheese">Extra Cheese</label>
					</div>
					<div className={styles.options}>
						<input
							type="checkbox"
							id="spicy"
							name="spicy"
							className={styles.check}
						/>
						<label htmlFor="spicy">Spicy Sauce</label>
					</div>
				</div>

				<div className={styles.add}>
					<input type="number"  defaultValue={1} className={styles.qty} />
					<button className={styles.btn}>Add To Cart</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
