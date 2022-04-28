"use strict";
//Normal, Water, Fire
//Spell, Goblin, Dragon, Wizard, Orc, Knight, Kraken, Elf
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDB = void 0;
var InMemoryDB = /** @class */ (function () {
    function InMemoryDB() {
        var _this = this;
        this.data = new Map([
            ["lukas-token", [{ id: 0, race: 6, damage: 85, element: 1 }]],
            ["johanna-token", [{ id: 1, race: 2, damage: 85, element: 2 }]]
        ]);
        this.getCards = function (token) {
            var cardData = _this.data.get(token);
            return cardData !== null && cardData !== void 0 ? cardData : [];
        };
    }
    return InMemoryDB;
}());
exports.InMemoryDB = InMemoryDB;
exports.default = InMemoryDB;
