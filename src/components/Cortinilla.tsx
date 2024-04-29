import React, { useEffect, useState } from "react";
import Intentos from "../model/intentosModel";

export const Cortinilla = ({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element => {
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
    <div className="w-screen h-screen bg-cyan-100 flex flex-row items-center justify-around">
      <div className="Data info">
        <h4 className="text-4xl font-bold italic">
          intentos:{intentos.length}{" "}
        </h4>
        <h1 className="text-6xl ">Tu {current?.status}</h1>
        <h3 className="text-5xl">Errores: {current?.errores}</h3>
        <p>Tiempo transcurrido: {current?.timepo}</p>
        {children}
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Partida
              </th>
            </tr>
          </thead>
          <tbody>
            {intentos.map((val, i) => {
              if (i >= intentos.length) {
                return (
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {i + 1}
                    </th>
                    <td className="px-6 py-4"> {val.status} </td>
                  </tr>
                );
              } else {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {i + 1}
                    </th>
                    <td className="px-6 py-4"> {val.status} </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
