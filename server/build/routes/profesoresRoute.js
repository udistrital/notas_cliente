"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesoresController_1 = __importDefault(require("../controllers/profesoresController"));
class ProfesoresRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', profesoresController_1.default.list);
        this.router.get('/:id', profesoresController_1.default.getOne);
    }
}
const profesorRoute = new ProfesoresRoute();
exports.default = profesorRoute.router;
