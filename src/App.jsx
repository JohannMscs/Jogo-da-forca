//CSS
import './App.css'

//React
import { useState, useCallback, useEffect } from 'react'

//Data
import {gamelist} from './data/list'

//Components
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import EndScreen from './components/EndScreen'


const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [list] = useState(gamelist)

  return (
    <>
      <div className='App'>
        
        {gameStage === 'start' && <StartScreen/>}
        {gameStage === 'game' && <GameScreen/>}
        {gameStage === 'end' && <EndScreen/>}
      </div>

    </>
  )
}

export default App
