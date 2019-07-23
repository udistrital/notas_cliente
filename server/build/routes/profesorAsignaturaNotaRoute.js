"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesorAsignaturaNotaController_1 = __importDefault(require("../controllers/profesorAsignaturaNotaController"));
class ProfesorAsignaturaNotaRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', profesorAsignaturaNotaController_1.default.getOne);
        this.router.put('/:id', profesorAsignaturaNotaController_1.default.put);
    }
}
const profesorAsignaturaNotaRoute = new ProfesorAsignaturaNotaRoute();
exports.default = profesorAsignaturaNotaRoute.router;
