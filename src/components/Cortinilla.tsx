import React, { useEffect, useState } from "react";
import Intentos from "../model/intentosModel";

export const Cortinilla = (): React.JSX.Element => {
  const [intentos, setIntentos] = useState<Intentos[]>([]);
  const [current, setCurrent] = useState<Intentos>();

  /// CArgar datos de la aplicaion
  useEffect(() => {
    const json = localStorage.getItem("intentos");
    const loadedIntentos = JSON.parse(json ?? "[]");
    if (loadedIntentos) {
      const aux = loadedIntentos as Intentos[];
      setIntentos(aux);
      setCurrent(aux[aux.length - 1]);
    }
    console.log(intentos);
  }, []);
  return (
    <div className="Cortinilla">
      <div className="Data info">
        <h4>{intentos.length} intentos</h4>
        <h1>Tu {current?.status}</h1>
        <h3>Errores: {current?.errores}</h3>
        <p>Tiempo transcurrido: {current?.timepo}</p>
      </div>
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Partida</th>
            </tr>
          </thead>
          <tbody>
            {intentos.map((val, i) => (
              <tr>
                <td>{i+1}</td>
                <td>{val.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
