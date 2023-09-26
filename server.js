const express = require("express");
const app = express();
const port = 3000;

const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];

app.use(express.json());
app.use(express.static("./deployment_project/build"));

app.get("/api/hand", (req, res) => {
  const randCards = [];

  for (let i = 0; i < 2; i++) {
    const randCard = cards[Math.floor(Math.random() * cards.length)];
    const randSuit = suits[Math.floor(Math.random() * suits.length)];
    randCards.push({ card: randCard, suit: randSuit });
  }
  res.json(randCards);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
