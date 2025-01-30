import React from 'react'

export default function GameScreen({verifyLetter}) {
  return (
    <div>
        <h1>Você está jogando</h1>
        <button onClick={verifyLetter}>finalizar jogo</button>
    </div>
  )
}
