import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {cards, faces} from './cards'
import './App.css'

function gen_hand(cards, setHand){
  let cards_copy = cards.slice();
  const card1 = cards_copy[Math.floor(Math.random()* cards_copy.length)];
  let index = cards_copy.indexOf(card1);
  cards_copy.splice(index,1)
  const card2 = cards_copy[Math.floor(Math.random()* cards_copy.length)];

  if (faces[card1[0]]){
    card1[0] = faces[card1[0]]
  }
  if (faces[card2[0]]){
    card2[0] = faces[card2[0]]
  }

  setHand([card1, card2]);

}

function App() {
  const [hand, setHand] = useState([]);
  return (
    <>
      <h1>POKER</h1>
      <div className="card">
        <button type="button" onClick={() => {gen_hand(cards, setHand)}}>
          generate hand
        </button>
        <p>
          {hand[0]} {hand[1]}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App






