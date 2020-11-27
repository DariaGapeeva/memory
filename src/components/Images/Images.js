import React, { useState, useEffect, useRef } from "react";
import Barash from "../../img/barash.png";
import Crosh from "../../img/crosh.png";
import Nyusha from "../../img/nyusha.png";
import Panda from "../../img/pandochka.png";
import Pin from "../../img/pin.png";
import Yogik from "../../img/yogik.png";
import styles from "./Images.module.css";
import Shirt from "../../img/shirt.png";

const calculate = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

class StateOne {
  constructor(id) {
    this.one = id;
  }
}

class StateTwo {
  constructor(id1, id2) {
    this.one = id1;
    this.two = id2;
  }
}

const Images = () => {
  const initialSmeshariki = [
    { id: 1, name: "Barash", pic: Barash, flipped: false },
    { id: 2, name: "Crosh", pic: Crosh, flipped: false },
    { id: 3, name: "Nyusha", pic: Nyusha, flipped: false },
    { id: 4, name: "Panda", pic: Panda, flipped: false },
    { id: 5, name: "Pin", pic: Pin, flipped: false },
    { id: 6, name: "Yogik", pic: Yogik, flipped: false },
    { id: 7, name: "Barash", pic: Barash, flipped: false },
    { id: 8, name: "Crosh", pic: Crosh, flipped: false },
    { id: 9, name: "Nyusha", pic: Nyusha, flipped: false },
    { id: 10, name: "Panda", pic: Panda, flipped: false },
    { id: 11, name: "Pin", pic: Pin, flipped: false },
    { id: 12, name: "Yogik", pic: Yogik, flipped: false },
  ];

  const [smeshariki, setSmeshariki] = useState(() =>
    calculate(initialSmeshariki)
  );
  const blockedCard = useRef([]);
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState({});

  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  const Flip = (id) => {
    if (!blockedCard.current.includes(id)) {
      if (isEmpty(state)) {
        setState(new StateOne(id));

        setSmeshariki(
          smeshariki.map((element) =>
            element.id === id
              ? { ...element, flipped: !element.flipped }
              : element
          )
        );
      } else if (state instanceof StateOne) {
        setState(new StateTwo(state.one, id));

        setSmeshariki(
          smeshariki.map((element) =>
            element.id === id
              ? { ...element, flipped: !element.flipped }
              : element
          )
        );
      }
    }
  };

  const followState = () => {
    if (state instanceof StateTwo) {
      let card1 = smeshariki.find((item) => item.id === state.one);
      let card2 = smeshariki.find((item) => item.id === state.two);
      if (state.one === state.two) {
        setState({});
      } else if (state.one !== state.two && card1.flipped && card2.flipped) {
        if (card1.name === card2.name) {
          setCounter(counter + 1);
          blockedCard.current.splice(
            blockedCard.length - 1,
            0,
            state.one,
            state.two
          );
          setState({});
        } else if (card1.name !== card2.name) {
          setTimeout(() => {
            setSmeshariki(
              smeshariki.map((element) =>
                element.id === state.one || element.id === state.two
                  ? { ...element, flipped: false }
                  : element
              )
            );
            setState({});
          }, 1000);
        }
      }
    }
  };

  const getStart = () => {
    setSmeshariki(() => calculate(initialSmeshariki));
    setCounter(0);
    setState({});
    blockedCard.current = [];
  };
  useEffect(followState, [state]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}> Counter: {counter} </div>
        <button className={styles.button} onClick={getStart}>
          {" "}
          Start{" "}
        </button>
      </div>
      <div className={styles.smeshariki}>
        {smeshariki.map((element) => (
          <div
            onClick={() => Flip(element.id)}
            className={styles.card + " " + (element.flipped ? styles.flip : "")}
            key={element.id}
          >
            <div className={styles.frontFace}>
              <img src={element.pic} alt="hero"></img>
            </div>
            <div className={styles.backFace}>
              <img src={Shirt} alt="shirt"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
