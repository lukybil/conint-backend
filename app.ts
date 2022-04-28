import express from "express"
import { InMemoryDB } from "./data/InMemoryDB"
const app = express()

type CardProps = {
  card: {id: string
  name: string
  race: number
  damage: number
  element: number}
}

const db = new InMemoryDB();

app.get('/cards', (req, res) => {
  const token = req.get("authorization");
  const formattedToken = token?.replace("Basic ", "");
  res.send(db.getCards(formattedToken || ""));
})

app.get('/', (req, res) => {
  res.send('hi')
})

export default app;