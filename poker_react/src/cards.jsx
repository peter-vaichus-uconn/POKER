export const cards = [[14, "H"], [14, "S"], [14, "C"], [14, "D"],
[2, "H"], [2, "S"], [2, "C"], [2, "D"],
[3, "H"], [3, "S"], [3, "C"], [3, "D"],
[4, "H"], [4, "S"], [4, "C"], [4, "D"],
[5, "H"], [5, "S"], [5, "C"], [5, "D"],
[6, "H"], [6, "S"], [6, "C"], [6, "D"],
[7, "H"], [7, "S"], [7, "C"], [7, "D"],
[8, "H"], [8, "S"], [8, "C"], [8, "D"],
[9, "H"], [9, "S"], [9, "C"], [9, "D"],
[10, "H"], [10, "S"], [10, "C"], [10, "D"],
[11, "H"], [11, "S"], [11, "C"], [11, "D"],
[12, "H"], [12, "S"], [12, "C"], [12, "D"],
[13, "H"], [13, "S"], [13, "C"], [13, "D"]];

export const faces = {
    14:"A",
    13:"K",
    12:"Q",
    11:"J"
};

function gen_hand(cards, setHand){
    let cards_copy = cards.slice();
    const card1 = cards_copy[Math.floor(Math.random()* cards_copy.length)];
    let index = cards_copy.indexOf(card1);
    cards_copy.splice(index,1);
    const card2 = cards_copy[Math.floor(Math.random()* cards_copy.length)];
  
    let index2 = cards_copy.indexOf(card2);
    cards_copy.splice(index2,1)
    const flop = cards_copy[Math.floor(Math.random()* cards_copy.length)];
  
    if (faces[card1[0]]){
      card1[0] = faces[card1[0]]
    }
    if (faces[card2[0]]){
      card2[0] = faces[card2[0]]
    }
  
    setHand([card1, card2]);
  
  }

export default gen_hand;