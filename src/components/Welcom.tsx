import React from 'react';
// import imagen  from "../img/WhatsApp Image 2024-04-16 at 15.43.11.jpeg";

import "../styles/welcom.css";

export const Welcom = ({play}:{play:React.MouseEventHandler<HTMLButtonElement>}): React.JSX.Element => {
  return (
    <div className='wrapper text-5xl font-bold bg-cyan-100'>
        <h1>Welcom Home to Hungman!!</h1>

        <img src="https://i.gifer.com/Kfde.gif" alt="asd" />


        <button
        className='rounded-lg p-3 px-6 bg-orange-300 text-white'
        onClick={play}
        >Paly</button>
    </div>
  )
}
