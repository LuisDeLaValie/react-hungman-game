import React, { useEffect, useRef, useState } from "react";
import "../styles/hungman.css";

import i0 from "../img/h0.png";
import i1 from "../img/h1.png";
import i2 from "../img/h2.png";
import i3 from "../img/h3.png";
import i4 from "../img/h4.png";
import i5 from "../img/h5.png";
import i6 from "../img/h6.png";

import Palabra from "../model/palabaAdivina";
import { Timer } from "./Timer";
import Intentos from "../model/intentosModel";
import { Cortinilla } from "./Cortinilla";

interface Props {
  words: Palabra;
}

const imgItentos = [i0, i1, i2, i3, i4, i5, i6];

export const Hangman = ({ words }: Props): React.JSX.Element => {
  const [selectWord, setSelectWord] = useState(words.lista[0]);
  const [guessedLetters, setguessedLetters] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState(0);
  const [inputval, setInputval] = useState("");
  const [intentos, setIntentos] = useState<Intentos[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [time, settime] = useState("");

  /// guardar datos
  useEffect(() => {
    const wing = displayWord.join("") === selectWord;
    const losser = errorCount > 5;
    if (wing || losser) {
      const newIntentos = [...intentos].concat({
        errores: errorCount,
        timepo: time,
        status: losser ? "Perdiste" : "Ganaste",
      });

      const json = JSON.stringify(newIntentos);
      localStorage.setItem("intentos", json);
      setIntentos(newIntentos);
    }
  }, [guessedLetters, errorCount]);

  const displayWord = selectWord.split("").map((latter) => {
    console.log("slecWord:" + selectWord);
    if (guessedLetters.includes(latter)) {
      console.log("guessedLetters: " + guessedLetters);
      return latter;
    } else {
      return "_";
    }
  });

  const handleGuss = (leatter: string) => {
    if (!guessedLetters.includes(leatter)) {
      setguessedLetters([...guessedLetters, leatter]);
      if (!selectWord.includes(leatter)) {
        setErrorCount(errorCount + 1);
        console.log("errorCount:" + errorCount);
      }
    }
    setInputval("");
  };

  const rstarGame = () => {
    const newWordIndex = Math.floor(Math.random() * words.lista.length);
    const newWord = words.lista[newWordIndex];

    setSelectWord(newWord);
    setguessedLetters([]);
    setErrorCount(0);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="Hangmant">
      {displayWord.join("") === selectWord || errorCount > 5 ? (
        <Cortinilla />
      ) : (
        <>
          <div>
            <Timer
              start={displayWord.join("") !== selectWord && errorCount < 6}
              timeCalback={(val) => settime(val)}
            />
          </div>
          <h2>adivina que {words.tipodelista} es</h2>
          <img src={imgItentos[errorCount]} alt="" />
          <p> {displayWord.join(" ")} </p>
          <input
            ref={inputRef}
            maxLength={1}
            onChange={(e) => handleGuss(e.target.value)}
            autoFocus={true}
            value={inputval}
            disabled={errorCount > 5}
          />
        </>
      )}

      {(displayWord.join("") === selectWord || errorCount > 5) && (
        <button
          onClick={() => {
            rstarGame();
            setSelectWord(
              words.lista[Math.floor(Math.random() * words.lista.length)]
            );
          }}
        >
          Selec new Word
        </button>
      )}
    </div>
  );
};
