import express from 'express';
import { InMemoryDB } from './data/InMemoryDB';
const app = express();

/*type CardProps = {
  card: {
    id: number;
    name: string;
    race: number;
    damage: number;
    element: number;
  };
};*/

const db = new InMemoryDB();

app.get('/cards', (req, res) => {
  const token = req.get('authorization');
  const formattedToken = token?.replace('Basic ', '');
  if (db.tokenExists(formattedToken ?? '')) {
    res.status(200).send(db.getCards(formattedToken ?? ''));
    return;
  }
  res.status(401).send();
});

app.get('/', (req, res) => {
  res.status(200).send('It is working');
});

export default app;
