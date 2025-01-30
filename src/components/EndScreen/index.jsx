import React from 'react'

export default function EndScreen({retry}) {
  return (
    <div>
        <h1>Jogo finalizado</h1>
        <button onClick={retry}>reniciar jogo</button>
        </div>
  )
}
