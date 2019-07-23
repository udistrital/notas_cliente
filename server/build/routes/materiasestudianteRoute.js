"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiasestudianteController_1 = __importDefault(require("../controllers/materiasestudianteController"));
class MateriasestudianteRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', materiasestudianteController_1.default.list);
        this.router.get('/:id', materiasestudianteController_1.default.getOne);
    }
}
const materiasestudianteRoute = new MateriasestudianteRoute();
exports.default = materiasestudianteRoute.router;
