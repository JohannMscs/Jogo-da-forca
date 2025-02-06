import React from 'react'
import "./style.css"

export default function GameScreen({verifyLetter}) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinha a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare">a</span>
      </div>
      <div className="letterContainer">
        <p>Tente adv        inhar uma letra da palavra:</p>
          <form action="">
            <input type="text" name='letter' maxLength="1" required />
            <button>Jogar!</button>
          </form>
          <p>Letras já utilizadas</p>
          <span>a,</span>
          <span>b,</span>
        </div>
      

    </div>
  )
}
