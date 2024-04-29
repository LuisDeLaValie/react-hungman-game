import React, { useEffect, useState } from "react";

interface Props {
  start: boolean;
  timeCalback: (time: string) => void;
}

export const Timer = ({ start, timeCalback }: Props): React.JSX.Element => {
  const [time, setTime] = useState(0);
  const [cronometro, setCronometro] = useState("");

  useEffect(() => {
    if (start) {
      const key = setInterval(() => {
        setTime((timee) => {
          const tim = timee + 1;

          if (tim < 60) {
            setCronometro(`${tim} s`);
            timeCalback(`${tim} s`);
          } else if (tim < 3600) {
            setCronometro(`${(tim / 60).toFixed(0)} min`);
            timeCalback(`${(tim / 60).toFixed(0)} min`);
          }

          return tim;
        });
      }, 1000);

      return () => {
        clearInterval(key);
      };
    } else {
      setTime(0);
    }
  }, [start]);

  console.log(time);
  return <h2 className="italic font-bold ">tiempo concurrido {cronometro}</h2>;
};
