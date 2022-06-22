"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var InMemoryDB_1 = require("./data/InMemoryDB");
var app = (0, express_1.default)();
/*type CardProps = {
  card: {
    id: number;
    name: string;
    race: number;
    damage: number;
    element: number;
  };
};*/
var db = new InMemoryDB_1.InMemoryDB();
app.get('/cards', function (req, res) {
    var token = req.get('authorization');
    var formattedToken = token === null || token === void 0 ? void 0 : token.replace('Basic ', '');
    if (db.tokenExists(formattedToken !== null && formattedToken !== void 0 ? formattedToken : '')) {
        res.status(200).send(db.getCards(formattedToken !== null && formattedToken !== void 0 ? formattedToken : ''));
        return;
    }
    res.status(401).send();
});
app.get('/', function (req, res) {
    res.status(200).send('It is working');
});
exports.default = app;
