"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiasController_1 = __importDefault(require("../controllers/materiasController"));
class MateriasRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', materiasController_1.default.list);
        this.router.get('/:id', materiasController_1.default.getOne);
        this.router.post('/', materiasController_1.default.create);
        this.router.delete('/:id', materiasController_1.default.delete);
        this.router.put('/:id', materiasController_1.default.update);
    }
}
const materiasRoute = new MateriasRoute();
exports.default = materiasRoute.router;
