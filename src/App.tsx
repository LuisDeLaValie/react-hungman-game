import React, { useState } from "react";
import { Welcom } from "./components/Welcom";
import { Hangman } from "./components/Hangman";
import Palabra from "./model/palabaAdivina";

const worods: Palabra[] = [
  {
    tipodelista: "Fruta",
    lista: ["pera", "manzana", "papalla", "platano", "freza", "pepino"],
  },
  {
    tipodelista: "Mascota",
    lista: ["gato", "perro", "perico", "cullo", "tortuga", "pez"],
  },
  {
    tipodelista: "Ave",
    lista: ["pato", "perico", "paloma", "tucan", "aguila", "cuervo"],
  },
];
// const frutas: Palabra[] = [
//   {
//     palabra: "manzana",
//     pista: "fruta que descubrio la gravedad",
//   },
// ];

function App(): React.JSX.Element {
  // console.log(frutas);
  const [play, setPlay] = useState(false);
  return (
    <div className="App">
      {!play ? (
        <Welcom play={() => setPlay(true)} />
      ) : (
        <Hangman words={worods[Math.floor(Math.random() * worods.length)]} />
      )}
    </div>
  );
}

export default App;
