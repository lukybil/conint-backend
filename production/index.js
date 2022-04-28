"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var InMemoryDB_1 = require("./data/InMemoryDB");
var app = (0, express_1.default)();
var port = 10001;
var db = new InMemoryDB_1.InMemoryDB();
app.get('/cards', function (req, res) {
    var token = req.get("authorization");
    var formattedToken = token === null || token === void 0 ? void 0 : token.replace("Basic ", "");
    res.send(db.getCards(formattedToken || ""));
});
app.get('/', function (req, res) {
    res.send('hi');
});
app.listen(port, process.env.HOST || '127.0.0.1', function () {
    console.log("Example app listening on port ".concat(port));
});
