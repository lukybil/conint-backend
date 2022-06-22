"use strict";
//Normal, Water, Fire
//Spell, Goblin, Dragon, Wizard, Orc, Knight, Kraken, Elf
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDB = void 0;
var InMemoryDB = /** @class */ (function () {
    function InMemoryDB() {
        var _this = this;
        this.data = new Map([
            [
                'lukas-token',
                [
                    { id: 0, race: 6, damage: 85, element: 1 },
                    { id: 1, race: 1, damage: 7, element: 2 },
                    { id: 2, race: 5, damage: 17, element: 0 },
                    { id: 3, race: 0, damage: 55, element: 1 },
                    { id: 4, race: 4, damage: 40, element: 0 },
                    { id: 5, race: 1, damage: 6, element: 1 },
                ],
            ],
            [
                'johanna-token',
                [
                    { id: 6, race: 2, damage: 85, element: 2 },
                    { id: 7, race: 7, damage: 26, element: 1 },
                    { id: 8, race: 5, damage: 21, element: 2 },
                    { id: 9, race: 1, damage: 6, element: 0 },
                    { id: 10, race: 3, damage: 65, element: 1 },
                    { id: 11, race: 5, damage: 16, element: 0 },
                ],
            ],
        ]);
        this.getCards = function (token) {
            var cardData = _this.data.get(token);
            return cardData !== null && cardData !== void 0 ? cardData : [];
        };
        this.tokenExists = function (token) { return _this.data.has(token); };
    }
    return InMemoryDB;
}());
exports.InMemoryDB = InMemoryDB;
exports.default = InMemoryDB;
