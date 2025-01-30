import React from 'react'
import './style.css'
export default function StartScreen({startGame}) {
  return (
    <div className='start'>
        <h1>Jogo da forca</h1>
        <p>clique em começar para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}
