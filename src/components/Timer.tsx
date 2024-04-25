import React, { useEffect, useState } from "react";

export const Timer = ({ start }: { start: boolean }): React.JSX.Element => {
  const [time, setTime] = useState(0);
  const [cronometro, setCronometro] = useState("");

  useEffect(() => {
    if (start) {
      const key = setInterval(() => {
        setTime((timee) => {
          const tim = timee + 1;

          if (tim < 60) {
            setCronometro(`${tim} s`);
          } else if (tim < 3600) {
            setCronometro(`${(tim / 60).toFixed(0)} min`);
          }

          return tim;
        });
      }, 1000);

      return () => {
        clearInterval(key);
      };
    }else{
        setTime(0);
    }
  }, [start]);

  console.log(time);
  return <h2>tiempo concurrido {cronometro}</h2>;
};
