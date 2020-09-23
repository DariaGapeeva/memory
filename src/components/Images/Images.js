import React, { useState, useEffect } from 'react';
import Barash from '../../img/barash.png';
import Crosh from '../../img/crosh.png';
import Nyusha from '../../img/nyusha.png';
import Pandochka from '../../img/pandochka.png';
import Pin from '../../img/pin.png';
import Yogik from '../../img/yogik.png';
import styles from './Images.module.css';
import Shirt from '../../img/shirt.png'

const calculate = (array) => {
	return array.sort(() => Math.random() - 0.5);
}

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
	const [paraId, setParaId] = useState([])


	const [counter, setCounter] = useState(0)

	const [smeshariki, setSmeshariki] = useState(() => calculate(initialSmeshariki))



	const Flip = (id) => {
		setSmeshariki(smeshariki.map(element => (element.id === id && !element.blocked) ? { ...element, flipped: !element.flipped } : element));
		let smesharik = smeshariki.find(item => item.id === id);
		setPara(!smesharik.flipped && !smesharik.blocked ? [...para, smesharik.name] : para);
		setParaId(!smesharik.flipped && !smesharik.blocked ? [...paraId, id] : paraId);



		console.log(smeshariki)
		console.log(paraId)

		console.log(para)
	}

	const checkPara = () => {
		if (para.length === 2 && para[0] === para[1] && paraId[0] !== paraId[1]) {
			setCounter(counter + 1);
			setSmeshariki(smeshariki.map(element => (element.name === para[0]) ? { ...element, blocked: true } : element));
			setPara([]);
			setParaId([]);

			// } else if (para.length === 2 && para[0] === para[1] && paraId[0] === paraId[1]) {
			// 	setPara([]);
			// 	setParaId([]);

		} else if (para.length === 2 && para[0] !== para[1]) {
			setTimeout(() => {

				smeshariki.map(element => (element.name === para[0] && element.flipped) ? Flip(element.id) : element);
				smeshariki.map(element => (element.name === para[1] && element.flipped) ? Flip(element.id) : element);
			}, 1000);
			setPara([]);
			setParaId([]);
		} else if (para.length >= 2 || paraId.length >= 2) {
			setPara([]);
			setParaId([]);
		}
	};

	useEffect(checkPara, [para, paraId])


	return (
		<div>
			<div className={styles.title}>  Счётчик: {counter} </div>
			<div className={styles.smeshariki}>
				{smeshariki
					.map((element) => (
						<div onClick={() => Flip(element.id)} className={styles.card + ' ' + (element.flipped ? styles.flip : '')} key={element.id}>
							<div className={styles.flipper} id='target'>
								<div className={styles.frontFace}>

									<img src={element.pic}></img>
								</div>
								<div className={styles.backFace}>
									<img src={Shirt}></img>
								</div>
							</div>
						</div>
					)
					)}
			</div >
		</div>
	)
}


export default Images;