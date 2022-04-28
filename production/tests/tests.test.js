"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../app"));
describe("Test the root path", function () {
    test("It should response the GET method", function (done) {
        (0, supertest_1.default)(app_1.default)
            .get("/")
            .then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
