//test
import { useState } from 'react'
import {cards, faces} from './cards'
import './App.css'

function gen_hand(cards, setHand){
  let cards_copy = cards.slice();
  const card1 = cards_copy[Math.floor(Math.random()* cards_copy.length)];
  let index1 = cards_copy.indexOf(card1);
  cards_copy.splice(index1,1)
  const card2 = cards_copy[Math.floor(Math.random()* cards_copy.length)];
  let index2 = cards_copy.indexOf(card1);
  cards_copy.splice(index2,1)
  const card3 = cards_copy[Math.floor(Math.random()* cards_copy.length)];
  let index3 = cards_copy.indexOf(card1);
  cards_copy.splice(index3,1)
  const card4 = cards_copy[Math.floor(Math.random()* cards_copy.length)];
  let index4 = cards_copy.indexOf(card1);
  cards_copy.splice(index4,1)
  const card5 = cards_copy[Math.floor(Math.random()* cards_copy.length)];

  if (faces[card1[0]]){
    card1[0] = faces[card1[0]]
  }
  if (faces[card2[0]]){
    card2[0] = faces[card2[0]]
  }



  setHand([card1, card2, card3, card4, card5]);

}

function App() {
  const [hand, setHand] = useState([]); //set state of hand to empty array
  const ftr_button = ["Flop","Turn","River"];
  const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);
  
  
  const handleClick = () => {
    if(count + 1 >= ftr_button.length) return;
    setCount(count+1);
  }

  return (
    <>
      <h1>POKER</h1>
      <div>
        <button type="button" onClick={() => {gen_hand(cards, setHand)}}> 
          generate hand
        </button>
      </div> <br />
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <div className="card">
          <h1>
            {hand[0]}
          </h1>
        </div>
        <div className="card">
          <h1>
            {hand[1]}
          </h1>
        </div>
      </div><br />
      <div>
        <button type="button" onClick={handleClick} > 
          {ftr_button[count]}
        </button>
      </div> <br />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="card">
          <h1>
            {hand[2]}
          </h1>
        </div>
        <div className="card">
          <h1>
            {hand[3]}
          </h1>
        </div>
        <div className="card">
          <h1>
            {hand[4]}
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
