import express from "express"
import { InMemoryDB } from "./data/InMemoryDB"
const app = express()
const port = 10001

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

app.listen(port, /*process.env.HOST || 'localhost',*/ () => {
  console.log(`Example app listening on port ${port}`)
})