"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../app"));
describe('Test the root path', function () {
    test('It should response the GET method', function (done) {
        (0, supertest_1.default)(app_1.default)
            .get('/')
            .then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        })
            .catch(function (error) {
            console.error(error);
        });
    });
});
describe('Test /cards endpoint', function () {
    test('It should response 401: Unauthorized', function (done) {
        (0, supertest_1.default)(app_1.default)
            .get('/cards')
            .then(function (response) {
            expect(response.statusCode).toBe(401);
            done();
        })
            .catch(function (error) {
            console.error(error);
        });
    });
    test('It should response 200 and Cards array, token: (Basic lukas-token)', function (done) {
        (0, supertest_1.default)(app_1.default)
            .get('/cards')
            .set('Authorization', 'Basic lukas-token')
            .send()
            .then(function (response) {
            expect(response.statusCode).toBe(200);
            expect(response.body).toMatchObject([
                { id: 0, race: 6, damage: 85, element: 1 },
                { id: 1, race: 1, damage: 7, element: 2 },
                { id: 2, race: 5, damage: 17, element: 0 },
                { id: 3, race: 0, damage: 55, element: 1 },
                { id: 4, race: 4, damage: 40, element: 0 },
                { id: 5, race: 1, damage: 6, element: 1 },
            ]);
            done();
        })
            .catch(function (error) {
            console.error(error);
        });
    });
    test('It should response 200 and Cards array,  token: (Basic johanna-token)', function (done) {
        (0, supertest_1.default)(app_1.default)
            .get('/cards')
            .set('Authorization', 'Basic johanna-token')
            .send()
            .then(function (response) {
            expect(response.statusCode).toBe(200);
            expect(response.body).toMatchObject([
                { id: 6, race: 2, damage: 85, element: 2 },
                { id: 7, race: 7, damage: 26, element: 1 },
                { id: 8, race: 5, damage: 21, element: 2 },
                { id: 9, race: 1, damage: 6, element: 0 },
                { id: 10, race: 3, damage: 65, element: 1 },
                { id: 11, race: 5, damage: 16, element: 0 },
            ]);
            done();
        })
            .catch(function (error) {
            console.error(error);
        });
    });
});
