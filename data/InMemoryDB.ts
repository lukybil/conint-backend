//Normal, Water, Fire
//Spell, Goblin, Dragon, Wizard, Orc, Knight, Kraken, Elf

export class InMemoryDB {
  private data = new Map([
    ["lukas-token", [{id: 0, race: 6, damage: 85, element: 1}]],
    ["johanna-token", [{id: 1, race: 2, damage: 85, element: 2}]]
  ])
  getCards = (token: string) => {
    const cardData = this.data.get(token);
    return cardData ?? []
  }
}

export default InMemoryDB;