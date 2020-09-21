import React from 'react';
import styles from './Transform.module.css'

const Transform = () => {
	return (
		<div className={styles.box} >
			<div className={styles.box__content}>
				<div className={styles.box__front}></div>
				<div className={styles.box__back}></div>
			</div>

		</div>
	)
}

export default Transform;