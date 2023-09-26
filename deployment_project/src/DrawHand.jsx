import { useState } from "react";
import axios from "axios";

export function DrawHand() {
  const [randCards, setRandCards] = useState([]);

  const fetchRandCards = () => {
    axios.get("/api/hand").then((res) => {
      setRandCards(res.data);
    });
  };

  return (
    <div>
      <h1>Cards</h1>
      {randCards.map((el) => (
        <p>
          {el.card} - {el.suit}
        </p>
      ))}
      <button onClick={fetchRandCards}>Draw Hand</button>
    </div>
  );
}
