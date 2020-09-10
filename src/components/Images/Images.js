import React, { useState, useEffect } from 'react';
import Barash from '../../img/barash.png';
import Crosh from '../../img/crosh.png';
import Nyusha from '../../img/nyusha.png';
import Pandochka from '../../img/pandochka.png';
import Pin from '../../img/pin.png';
import Yogik from '../../img/yogik.png';
import styles from './Images.module.css';
import Shirt from '../../img/shirt.png'

const Images = () => {

	const initialSmeshariki = [
		{ id: 1, name: 'Barash', pic: Barash, flipped: false, blocked: false },
		{ id: 2, name: 'Crosh', pic: Crosh, flipped: false, blocked: false },
		{ id: 3, name: 'Nyusha', pic: Nyusha, flipped: false, blocked: false },
		{ id: 4, name: 'Pandochka', pic: Pandochka, flipped: false, blocked: false },
		{ id: 5, name: 'Pin', pic: Pin, flipped: false, blocked: false },
		{ id: 6, name: 'Yogik', pic: Yogik, flipped: false, blocked: false },
		{ id: 7, name: 'Barash', pic: Barash, flipped: false, blocked: false },
		{ id: 8, name: 'Crosh', pic: Crosh, flipped: false, blocked: false },
		{ id: 9, name: 'Nyusha', pic: Nyusha, flipped: false, blocked: false },
		{ id: 10, name: 'Pandochka', pic: Pandochka, flipped: false, blocked: false },
		{ id: 11, name: 'Pin', pic: Pin, flipped: false, blocked: false },
		{ id: 12, name: 'Yogik', pic: Yogik, flipped: false, blocked: false }
	]
	const [para, setPara] = useState([])

	const [smeshariki, setSmeshariki] = useState(initialSmeshariki)



	const Flip = (id) => {
		setSmeshariki(smeshariki.map(element => (element.id === id) && (element.blocked === false) ? { ...element, flipped: !element.flipped } : element))
		setPara([...para, smeshariki[id - 1].name])
	}
	useEffect(() => {
		if (para.length === 2 && para[0] === para[1]) {
			// alert('пара');

			setSmeshariki(smeshariki.map(element => element.name === para[0] ? { ...element, blocked: true } : element))
			setPara([]);


		} else if (para.length === 2 && para[0] !== para[1]) {
			// alert('не пара');
			// setPara([]);
			setSmeshariki(smeshariki.map(element => (element.flipped === true) && (element.blocked === false) ? { ...element, flipped: false } : element))
			setPara([]);

		}

	})

	return (<div className={styles.smeshariki}>
		{smeshariki
			.map((element) => (
				<div onClick={() => Flip(element.id)} className={styles.card} key={element.id}>
					{element.flipped ? <img className={styles.frontFace} src={element.pic}></img> :
						<img className={styles.backFace} src={Shirt}></img>}

				</div>
			)
			)}
	</div>

	)
}


export default Images;