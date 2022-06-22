"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var host = process.env.BACKEND_HOST || 'localhost';
var port = process.env.BACKEND_PORT
    ? Number.parseInt(process.env.BACKEND_PORT)
    : 10001;
app_1.default.listen(port, host, function () {
    console.log("Monster cards backend app listening on ".concat(host, ":").concat(port));
});
